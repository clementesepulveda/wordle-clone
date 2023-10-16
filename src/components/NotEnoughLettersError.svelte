<script>
    // @ts-nocheck
	
	import {onDestroy} from 'svelte'
    import { fade, fly } from 'svelte/transition';

	export let time = 1500;

	export let getSelfRef = true
	let self

	$: if(self) setTimeout(() => {
		self.$destroy()
	}, time)

</script>

{#if getSelfRef}
	<svelte:self bind:this={self} getSelfRef={false}/>
{:else}
	<div class="error" out:fade>
		Not enough letters
	</div>
{/if}


<style>
	.error {
        background-color: white;
        width: 10rem;
        height: 3rem;
        line-height: 3rem;
        text-align: center;
        border-radius: 0.2rem;

        margin: 1rem;
        z-index: 5000;

        font-size: small;
        color:black;    
        text-shadow: 0.7px 0 black;
        letter-spacing:1px;
        font-weight:bold;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	}
</style> 