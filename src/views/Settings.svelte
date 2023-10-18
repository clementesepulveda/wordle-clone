<script>
    import { rowsCountWritable, wordLengthWritable } from "../stores/stores";

	import { fly } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';

    let wordLength = 5;
    wordLengthWritable.subscribe(val => {
        wordLength = val
    });
    let rowsCount = 6;
    rowsCountWritable.subscribe(val => {
        rowsCount = val
    });

    function longerWord() {
        wordLengthWritable.update(n => n+1)
    }

</script>

<div class="settings-container"  transition:fly={{ delay: 0, duration: 700, x: 0, y: '100vh', opacity: 1, easing: quintInOut }}>
    <div class="setting-container">
        <p>Word Length: { wordLength }</p>
        <button>less</button>
        <button on:click={longerWord}>more</button>
    </div>
    <div class="setting-container">
        <p>Tries: { rowsCount }</p>
        <button>more</button>
        <button>less</button>
    </div>
</div>

<style>
    p {
        color: white;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    .settings-container {
        position:absolute;
        display: grid;
        justify-content: center;
        background-color: #090909;
        height: 100%;
        width: 100%;
    }

    .setting-container {
        /* display: grid; */
    }
</style>