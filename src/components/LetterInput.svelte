<script>
    // TODO you are evading the error
    // @ts-nocheck
    export let letter;
    export let state = "trans-back";
    export let onclick;
</script>

<button id="container" class={state}  on:click={onclick}>{letter}</button>

<style>
    #container {
        color: white;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        
        width: 3.8rem;
        height: 3.8rem;
        border: 1px solid #3A3A3C;
        margin: 0.1rem;

        font-size: 0.7rem;
        color: white;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-weight: 1000;

        line-height: 3.8rem;
        text-align: center;
    }

    :global(.trans-back) {
        background-color: transparent;
    }
</style>