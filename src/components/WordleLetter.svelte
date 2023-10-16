<script>
    // TODO you are evading the error
    // @ts-nocheck
    
    // import { createAnimationTriggerAction } from 'svelte-trigger-action'
    
    // const { triggerAnimation, animationAction } = createAnimationTriggerAction()

    export let letter;
    export let index;
    export let animationAction;

    let i = 0
</script>

<div class="item" id=item-{index} use:animationAction>
    {letter}
</div>

<style>
    .item {
        width: 3.8rem;
        height: 3.8rem;
        margin: 0.1rem;

        font-size: xx-large;
        color: white;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-weight: 1000;

        line-height: 3.8rem;
        text-align: center;
    }
</style>