<script>
    // TODO you are evading the error
    // @ts-nocheck
    import NavBar from "../components/NavBar.svelte";
    import Game from "../views/Game.svelte";
    import Settings from "../views/Settings.svelte";

    let showSettings = false;
    const toggleSettings = () => {
        showSettings = !showSettings;
    }
    let isFinished = false;
</script>


<div id="app">
    <NavBar toggleSettings={toggleSettings} bind:isFinished={isFinished}/>
    <div id="screen">
        <div class="content">
            {#if showSettings}
                <Settings/>
            {/if}
            <Game bind:isFinished={isFinished}/>
        </div>
    </div>
</div>

<style>
    #app {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

#screen {
    flex: 1;
    position: relative;
}

.content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
}

</style>