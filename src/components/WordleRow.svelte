<script>
    // TODO you are evading the error
    // @ts-nocheck
    import WordleLetter from "./WordleLetter.svelte";
    
    export let row;
    export let rowLetters;
    export let rowAnimator;
    export let cellAnimators;
</script>

<div class="row" id="row-{row}"  use:rowAnimator>
    {#each Array(5) as input, i}
        <WordleLetter letter={rowLetters[i]} index={i} animationAction={cellAnimators[i].animationAction}/>
    {/each}
</div>

<style>
    
    .row {
        /* background-color: red; */
        display: flex;
        justify-content: center;
        z-index: -2; /* Adjusted z-index */
    }
</style>