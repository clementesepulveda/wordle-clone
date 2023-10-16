<script>
    // TODO you are evading the error
    // @ts-nocheck
    import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
    import NotEnoughLettersError from '../components/NotEnoughLettersError.svelte'
    import LetterInput from '../components/LetterInput.svelte';
    import Answer from '../components/Answer.svelte';
    import NotRealWordError from '../components/NotRealWordError.svelte';
    import WordyInput from '../components/WordyInput.svelte';
    // import WordleLetter from '../components/WordleLetter.svelte';
    import WordleRow from '../components/WordleRow.svelte';

    // TODO make this more beautiful
    import { createAnimationTriggerAction } from 'svelte-trigger-action';

    const cellAnimators = [
        [
            createAnimationTriggerAction(),
            createAnimationTriggerAction(),
            createAnimationTriggerAction(),
            createAnimationTriggerAction(),
            createAnimationTriggerAction(),
        ],
        [
            createAnimationTriggerAction(),
            createAnimationTriggerAction(),
            createAnimationTriggerAction(),
            createAnimationTriggerAction(),
            createAnimationTriggerAction(),
        ],
        [
            createAnimationTriggerAction(),
            createAnimationTriggerAction(),
            createAnimationTriggerAction(),
            createAnimationTriggerAction(),
            createAnimationTriggerAction(),
        ],
        [
            createAnimationTriggerAction(),
            createAnimationTriggerAction(),
            createAnimationTriggerAction(),
            createAnimationTriggerAction(),
            createAnimationTriggerAction(),
        ],
        [
            createAnimationTriggerAction(),
            createAnimationTriggerAction(),
            createAnimationTriggerAction(),
            createAnimationTriggerAction(),
            createAnimationTriggerAction(),
        ],
        [
            createAnimationTriggerAction(),
            createAnimationTriggerAction(),
            createAnimationTriggerAction(),
            createAnimationTriggerAction(),
            createAnimationTriggerAction(),
        ],
    ]
    const rowAnimators = [
        createAnimationTriggerAction(),
        createAnimationTriggerAction(),
        createAnimationTriggerAction(),
        createAnimationTriggerAction(),
        createAnimationTriggerAction(),
        createAnimationTriggerAction(),
    ]
    
	let right_word = "";
    let loading_word = true;
	onMount(async () => {
        let res2 = {};
        while (!res2.ok) {
            const res = await fetch("https://random-word-api.herokuapp.com/word?length=5");
            right_word = await res.json();
            right_word = right_word[0].toUpperCase();
            res2 = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${right_word}`);
        }
        loading_word = false;
	});

    const rows = 6;
    const word_length = 5;

    let current_row = 0;
    let current_item = 0;
    const current_board = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < word_length; j++) {
            row.push("");
        }
        current_board.push(row);
    }
    const letters_guesses = {
        A: 'trans-back',
        B: 'trans-back',
        C: 'trans-back',
        D: 'trans-back',
        E: 'trans-back',
        F: 'trans-back',
        G: 'trans-back',
        H: 'trans-back',
        I: 'trans-back',
        J: 'trans-back',
        K: 'trans-back',
        L: 'trans-back',
        M: 'trans-back',
        N: 'trans-back',
        O: 'trans-back',
        P: 'trans-back',
        Q: 'trans-back',
        R: 'trans-back',
        S: 'trans-back',
        T: 'trans-back',
        U: 'trans-back',
        V: 'trans-back',
        W: 'trans-back',
        X: 'trans-back',
        Y: 'trans-back',
        Z: 'trans-back',
    }

    let finished = false;

    function isLetter(code) {
        // TODO actually check if its a letter
        return code.toLowerCase() != code.toUpperCase() && code.length === 1;
    }

    async function isRealWord() {
        if (current_board[current_row].includes("")) {
            rowAnimators[current_row].triggerAnimation('shake')
            new NotEnoughLettersError({
                target: document.getElementById("errors-container")
            })
            return false;
        }

        let res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${current_board[current_row].join("")}`);

        if (res.ok) {
            return true;
        } 

        rowAnimators[current_row].triggerAnimation('shake')
        new NotRealWordError({
            target: document.getElementById("errors-container")
        })
        return false;
    }

    function GetElementInsideContainer(containerID, childID) {
        var elm = {};
        var elms = document.getElementById(containerID).getElementsByTagName("*");
        for (var i = 0; i < elms.length; i++) {
            if (elms[i].id === childID) {
                elm = elms[i];
                break;
            }
        }
        return elm;
    }

	function onKeyDown(e) {
        if (finished) {
            return;
        }

        if (e.code === "Enter") {
            if (!loading_word) {
                enterKey();
            }
        } else if (e.code === "Backspace") {
            eraseCharacter();
        } else if (isLetter(e.key)) {
            addLetter(e.code[e.code.length-1].toUpperCase())
        }
	}

    function eraseCharacter() {
        if (current_item < 1) {
            return;
        }

        current_item -= 1;
        const container = GetElementInsideContainer(`row-${current_row}`, `item-${current_item}`)
        container.textContent = ""

        current_board[current_row][current_item] = ""
    }

    async function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function enterKey() {
        if (finished) {
            return; 
        }
        if (await isRealWord()) {
            for (let i = 0; i < 5; i++) {
                // FLIP 180 degrees
                cellAnimators[current_row][i].triggerAnimation('rotate');
                await sleep(200); // Adjust animationDuration to the actual duration of the animation

                const container = GetElementInsideContainer(`row-${current_row}`, `item-${i}`)
                const right_char = right_word[i];
                const guessed_char = current_board[current_row][i];

                if (right_char === guessed_char) {
                    container.classList.add("right-place")
                    letters_guesses[guessed_char] = "right-place"
                } else if (right_word.includes(guessed_char)) {
                    if (must_color_yellow(i)){
                        container.classList.add("wrong-place")
                    } else {
                        container.classList.add("wrong-letter")
                    }
                    if (letters_guesses[guessed_char] != "right-place") {
                            letters_guesses[guessed_char] = "wrong-place"
                        }
                } else {
                    container.classList.add("wrong-letter")
                    letters_guesses[guessed_char] = "wrong-letter"
                }
                

                // FLIP 180 degrees
                cellAnimators[current_row][i].triggerAnimation('rotateBack');
                await sleep(200); // Adjust animationDuration to the actual duration of the animation

            }
            
            
            if (current_board[current_row].join("") == right_word) {
                finishGame();
            }

            current_row += 1;
            current_item = 0;
        }
        
        if ( current_row == rows) {
            finishGame();
        }
    }

    function must_color_yellow(idx) { // receives index of letter
        let count = (right_word.split(current_board[current_row][idx]).length - 1) 
        for (let j = 0; j < idx; j++) {
            if (current_board[current_row][j] == current_board[current_row][idx]) {
                count -= 1;
            }

            if (count <= 0) {
                return false;
            }
        }

        return true;
    }

    function addLetter(letter) {
        if (current_item > 4) {
            return;
        }
        if (finished) {
            return;
        }

        cellAnimators[current_row][current_item].triggerAnimation('pop')
        const container = GetElementInsideContainer(`row-${current_row}`, `item-${current_item}`)
        container.textContent = letter

        current_board[current_row][current_item] = letter
        current_item += 1
    }

    function finishGame() {
        if (finished) {
            return;
        }

        finished = true;
        new Answer({
            target: document.getElementById("errors-container"),
            props: {
                answer: right_word
            }
        })


    }

</script>

<section id="navbar">
    <div id="title">Wordle</div>
    <span class=reload>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#" on:click={() => location.reload()}>&#x21bb;</a>
     </span>

</section>

<section id="errors">
    <div id="errors-container">
    </div>
</section>

<section id="playing-grid">
    {#each Array(rows) as input, j}
        <WordleRow row={j} rowLetters={current_board[j]} rowAnimator={rowAnimators[j].animationAction} cellAnimators={cellAnimators[j]}/>
    {/each}
</section>

<section id="guessed-letters">
    <div class="guessed-letters-row">
        {#each "QWERTYUIOP" as item, i}
            <LetterInput letter={item} state={letters_guesses[item]} onclick={() => addLetter(item)}/>
        {/each}
    </div>
    <div class="guessed-letters-row">
        {#each "ASDFGHJKL" as item, i}
            <LetterInput letter={item} state={letters_guesses[item]} onclick={() => addLetter(item)}/>
        {/each}
    </div>
    <div class="guessed-letters-row">
        <WordyInput letter="ENTER" onclick={enterKey}/>
        {#each "ZXCVBNM" as item, i}
            <LetterInput letter={item} state={letters_guesses[item]} onclick={() => addLetter(item)}/>
        {/each}
        <WordyInput letter="BACK" onclick={eraseCharacter}/>
    </div>
</section>

<!-- TODO listen to just stuffs -->
<svelte:window on:keydown={onKeyDown} />
<!-- <svelte:window on:keypress={onKeyDown} /> -->





<style>
    #navbar {
        color: white;
        height: 4rem;
        border-bottom: 1px solid grey;
        font-size: 3rem;
        line-height: 4rem;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

        text-align: center;
        display: flex;
    }

    #title {
        flex-grow: 1;
    }

    .reload {
        font-family: Lucida Sans Unicode;
        flex-grow: 0;
    }

    .reload a {
        color: white;
        text-decoration: none;
    }
    
    #playing-grid {
        padding: 0.6rem;
    }
    
    :global(.item) {
        border: 3px solid #3A3A3C;
    }
    :global(.wrong-place) {
        background-color: #B59F3B;
        border: 3px solid transparent;
    }
    :global(.wrong-letter) {
        background-color: #3A3A3C;
        border: 3px solid transparent;
    }
    :global(.right-place) {
        background-color: #538D4E;
        border: 3px solid transparent;
    }

    #errors {
        display: flex;
        justify-content: center;
        z-index: 50;
    }

    #errors-container {
        position: absolute;
    }

    .guessed-letters-row {
        display: flex;
        justify-content: center;
    }

    :global(.shake) {
        position: relative;
        animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;
        z-index: -1; /* Adjusted z-index */
    }

    @keyframes shake {
    10%, 90% {
        transform: translate3d(-1px, 0, 0);
    }
    
    20%, 80% {
        transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
        transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
        transform: translate3d(4px, 0, 0);
    }
    }

    :global(.pop) {
        animation: pop 0.1s linear 1;
    }

    @keyframes pop {
    50%  {transform: scale(1.2);}
    }

    :global(.rotate) {
        transition: transform 0.4s;
        transform: rotateX(90deg);
    }
    :global(.rotateBack) {
        transition: transform 0.4s;
        transform: rotateX(0deg);
    }
</style>