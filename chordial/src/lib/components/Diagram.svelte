<!-- js -->
<script>
export let chord;

</script>

<!-- template markup -->

<!-- <div> 
    {#each chord.fretsOnStrings as fretNumber, i} 
    <div> the fret you play on string {i} is { fretNumber === null ? "X" : fretNumber } </div>
    {/each} 
</div> -->

<div>
    <div>
        <div class="fretboard-container">
            <div class="base-fret">{chord.baseFret}</div>
            <!-- columns -->
            <div class="string-1"></div>
            <div class="string-2"></div>
            <div class="string-3"></div>
            <div class="string-4"></div>
            <div class="string-5"></div>
            <div class="string-6"></div>
            <!-- rows -->
            <div class="fret-1"></div>
            <div class="fret-2"></div>
            <div class="fret-3"></div>
            <div class="fret-4"></div>
            <div class="fret-5"></div>
            <!-- fret marker -->

            {#each chord.fretsOnStrings as marker, i}   
            {#if marker > 0 }
                <div class="marker-div" 
                style="grid-column: {i + 2}/{i + 3}; grid-row: {marker}/{marker + 1}">
                </div>
            {:else if marker === null}
                <div class="marker-x"
                style="grid-column: {i + 2}/{i + 3}">X
                </div>
            {:else}
            <!-- fallback -->
            {/if}
            {/each}
        
        </div>
    </div>
</div>
<!-- css -->
 <style>
.fretboard-container {
    display: grid;
    grid-template-columns: 0.5fr repeat(6, 1fr);
    grid-template-rows: repeat(5, 1fr);
    
}
.base-fret {
    grid-column: 1/2;
    grid-row: 1/2;
    padding-left: .25rem;
}
.fret-1 {
  grid-column: 2/8;
  grid-row: 1/2;
  border-bottom: 1px solid black;  
  /* border-top: 1px solid black; */

}
.fret-2 {
  grid-column: 2/8;
  grid-row: 2/3;
  border-bottom: 1px solid black;
}
.fret-3 {
  grid-column: 2/8;
  grid-row: 3/4;
  border-bottom: 1px solid black;
}
.fret-4 {
  grid-column: 2/8;
  grid-row: 4/5;
  border-bottom: 1px solid black;
}
.fret-5 {
  grid-column: 2/8;
  grid-row: 5/6;
  border-bottom: 1px solid black;
}

.marker-div {
  border: dotted blue;
  border-radius: 50%;
  background-color: blue;
}

.marker-x {
    grid-row: 1/2;
    color: red;

}

.string-1 {
  grid-column: 2/3;
  grid-row: 1/6;
  border-left: 1px solid black;
}

.string-2 {
  grid-column: 3/4;
  grid-row: 1/6;
  border-left: 1px solid black;
}

.string-3 {
  grid-column: 4/5;
  grid-row: 1/6;
  border-left: 1px solid black;
}

.string-4 {
  grid-column: 5/6;
  grid-row: 1/6;
  border-left: 1px solid black;
}

.string-5 {
  grid-column: 6/7;
  grid-row: 1/6;
  border-left: 1px solid black;
}

.string-6 {
  grid-column: 7/8;
  grid-row: 1/6;
  border-left: 1px solid black;
  /* border-right: 1px solid black; */
}

</style>