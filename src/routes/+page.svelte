<script lang="ts">
  import {
    small,
    sub,
    smallcap,
    sup,
    rune,
    bbb,
    cursive,
    cursiveBold,
    fraktur,
    region,
    square,
    squared,
    squareBlack,
    circled,
    circleBlack,
    ascii,
    hex,
    digit,
    currency,
    ヒンディーtest,
    एक,
    漢字,
    大字,
    よみ,
    こてん,
    angle
  } from '$lib';
  let num = 1234.56;
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<p>
  hash: <input type="number" bind:value={num} /> {JSON.stringify(num)}
</p>
<p>
  ヒンディーtest {ヒンディーtest.stringify(num, 'वाँ')}
</p>
<p>
  एक {एक.stringify(num, 'वाँ')}
</p>
<p>
  漢字 {漢字.stringify(num, '')}
</p>
<p>
  大字 {大字.stringify(num, '')}
</p>
<p>
  よみ {よみ.stringify(num, 'こ')}
</p>
<p>
  こてん {こてん.stringify(num, 'か')}
</p>
<p>
  angle {angle.stringify(num, '')}
</p>
