<script>
    // @ts-nocheck
    import { fade, fly } from 'svelte/transition';

	export let answer;

</script>

<div class="error">
    {answer}
</div>


<style>
	.error {
        background-color: white;
        width: 10rem;
        height: 3rem;
        line-height: 3rem;
        text-align: center;
        border-radius: 0.2rem;

        margin: 1rem;

        font-size: small;
        color:black;    
        text-shadow: 0.7px 0 black;
        letter-spacing:1px;
        font-weight:bold;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	}
</style> 