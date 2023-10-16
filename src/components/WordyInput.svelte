<script>
    // TODO you are evading the error
    // @ts-nocheck
    export let letter;
    export let state = "trans-back";
    export let onclick;

    const letter_size = 5;
</script>

<button id="container" class={state}  on:click={onclick}>{letter}</button>

<style>
    #container {
        color: white;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        
        width: 6rem;
        height: 3.8rem;
        border: 1px solid #3A3A3C;

        padding: 0rem 1rem;
        margin: 0.1rem;
        border-radius: 4px;

        font-size: 0.7rem;
        color: white;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

        text-shadow: 1px 0 white;
        letter-spacing:2px;
        font-weight:bold;

        line-height: 3.6rem;
        text-align: center;

        @media (max-width: 500px) {
            width: 3.5rem;
            padding: 0rem 0.3rem;
            margin: 0.1rem;
        }
    }

    :global(.trans-back) {
        background-color: #818384;
    }
</style>