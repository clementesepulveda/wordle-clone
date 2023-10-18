<script>
    // TODO you are evading the error
    // @ts-nocheck
    // import { wordLength } from "../stores/stores";

    export let toggleSettings;
    export let isFinished;

    function settings() {
        toggleSettings();
    }
</script>

<section id="navbar">
    <div id="title">Wordle</div>
    <span class=reload>
        {#if isFinished}
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a href="#" on:click={() => location.reload()}>&#x21bb;</a>
        {/if}
        <!-- <button on:click={settings}>click</button> -->
    </span>

</section>

<style>
    #navbar {
        color: white;
        height: 4rem;
        border-bottom: 1px solid grey;
        font-size: 3rem;
        line-height: 4rem;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

        display: grid;
        grid-template-columns: 1fr repeat(1, auto) 1fr;
        grid-column-gap: 5px;
        justify-items: center;
        padding:0; 
        margin: 0; 
        list-style: none;
    }

    #title {
        grid-column-start: 2;

    }

    .reload {
        font-family: Lucida Sans Unicode;
        margin-left: auto;
        padding-right: 1rem;
        display: flex;
    }

    .reload a {
        color: white;
        text-decoration: none;
    }

</style>