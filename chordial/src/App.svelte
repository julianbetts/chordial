<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import { generateAllVariations, baseShapes, chords, chromaticNotes } from './lib/stores/chords.js';
  import Diagram from './lib/components/Diagram.svelte'


  let selectedRootNote = '';  // Default to C
  let selectedChordType = '';  // Default to major



  let generatedChords = [];
  $: if (selectedRootNote && selectedChordType) {
  // This runs whenever selectedRootNote or selectedChordType changes
  // and both have values
    generatedChords = generateAllVariations(selectedRootNote, baseShapes);
    console.log('Selected:', selectedRootNote, selectedChordType);
    console.log('Generated chords:', generatedChords);
  }
</script>

<main>



  <div class="selector-container">
    <select bind:value={selectedRootNote} id="root-note">select
      <option value="a">A</option>
      <option value="a#">A#</option>
      <option value="b">B</option>    
      <option value="c">C</option>
      <option value="c#">C#</option>
      <option value="d">D</option>    
      <option value="d#">D#</option>
      <option value="e">E</option>
      <option value="f">F</option>
      <option value="f#">F#</option>
      <option value="g">G</option>
      <option value="g#">G#</option> 
    </select>
    <select bind:value={selectedChordType} id="chord">select
      <option value="major">Major</option>
    </select>
  </div>

  <div class="chord-diagrams">
    {#each generatedChords as singleChordDiagram}
    <Diagram chord={singleChordDiagram}></Diagram>
    {/each}
  </div>



  <!-- <div>
    {#each $chords as chordData}
    <Diagram chord={chordData}></Diagram>
    {/each}
  </div> -->
</main>

<style>
</style>
