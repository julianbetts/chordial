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
            <div class="fret-counter"></div>
            <div class="string-1"></div>
            <div class="string-2"></div>
            <div class="string-3"></div>
            <div class="string-4"></div>
            <div class="string-5"></div>
            <div class="string-6"></div>
        </div>
    </div>
</div>

<!-- css -->
 <style>
.fretboard-container {
    display: grid;
    grid-template-columns: 1/2fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
}
 </style>