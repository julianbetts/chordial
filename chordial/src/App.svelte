<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import { chords } from './lib/stores/chords.js'
  import Diagram from './lib/components/Diagram.svelte'
</script>

<main>
  <div>
    {#each $chords as chordData}
    <Diagram chord={chordData}></Diagram>
    {/each}
  </div>
</main>

<style>
</style>
