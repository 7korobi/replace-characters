const hexRegExp = /(0x)?([\+\-]?)([0-9a-f]+(\.[0-9a-f]+)?|\.[0-9a-f]+)(h)?/gi;
const digitRegExp = /([\+\-]?)([0-9]+(\.[0-9]+)?|\.[0-9]+)(e([\+\-]?[0-9]+))?/gi;

export function hex(str: string) {
	str = str.replace(
		hexRegExp,
		(hex: string, head: string, flag: string, float: string, sub: string, tail: string) => {
			let num: string;
			if (sub) {
				num = float.replace(new RegExp(`\\${sub}$`), '');
			} else {
				if ('.' === float[0]) {
					sub = float;
				} else {
					num = float;
				}
			}
			return [flag, num, sub].join('');
		}
	);
	return str;
}

export function digit(str: string) {
	str = str.replace(
		digitRegExp,
		(digit: string, flag: string, float: string, sub: string, _ext: string, ext: string) => {
			let num: string;
			if (sub) {
				num = float.replace(new RegExp(`\\${sub}$`), '');
			} else {
				if ('.' === float[0]) {
					sub = float;
				} else {
					num = float;
				}
			}
			return [flag, comma3(num), sub, ext].join('');
		}
	);
	return str;
}

export function currency(num: number, precision = 0) {
	const size = 10 ** precision;
	const unit = 0.1 ** precision;
	return comma3(`${Math.ceil(num * size) * unit}`);
}

function comma3(num: string) {
	if (!num) return '';
	return num.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
}
