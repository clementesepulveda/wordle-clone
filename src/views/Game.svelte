<script>
    // TODO you are evading the error
    // @ts-nocheck
	import { onMount } from 'svelte';
    import NotEnoughLettersError from '../components/NotEnoughLettersError.svelte'
    import LetterInput from '../components/LetterInput.svelte';
    import Answer from '../components/Answer.svelte';
    import NotRealWordError from '../components/NotRealWordError.svelte';
    import WordyInput from '../components/WordyInput.svelte';
    import WordleRow from '../components/WordleRow.svelte';
    import { wordLengthWritable, rowsCountWritable } from '../stores/stores';
    import { createAnimationTriggerAction } from 'svelte-trigger-action';

    // TODO
    let wordLength = 5;
    wordLengthWritable.subscribe(val => {
        wordLength = val
    });
    let rowsCount = 6;
    rowsCountWritable.subscribe(val => {
        rowsCount = val
    });

    // TODO make this more beautiful
    const cellAnimators = [];
    for (let i = 0; i < rowsCount; i++) {
        const row = [];
        for (let j = 0; j < wordLength; j++) {
            row.push(createAnimationTriggerAction());
        }
        cellAnimators.push(row);
    }

    const rowAnimators = [];
    for (let i = 0; i < rowsCount; i++) {
        rowAnimators.push(createAnimationTriggerAction());
    }

    let fillingRow = true;
    
	let right_word = "";
	onMount(async () => {
        let res2 = {};
        while (!res2.ok) {
            const res = await fetch(`https://random-word-api.herokuapp.com/word?length=${wordLength}`);
            right_word = await res.json();
            right_word = right_word[0].toUpperCase();
            res2 = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${right_word}`);
        }
        fillingRow = false;
	});

    let current_row = 0;
    let current_item = 0;
    const current_board = [];
    for (let i = 0; i < rowsCount; i++) {
        const row = [];
        for (let j = 0; j < wordLength; j++) {
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

    export let isFinished;

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
        if (isFinished) {
            return;
        }
        if (fillingRow) {
            return;
        }

        if (e.code === "Enter") {
            if (!fillingRow) {
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
        if (isFinished) {
            return; 
        }
        if (fillingRow) {
            return;
        }

        fillingRow = true;
        if (await isRealWord()) {
            for (let i = 0; i < wordLength; i++) {
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
                
                cellAnimators[current_row][i].triggerAnimation('rotateBack');
                await sleep(200); // Adjust animationDuration to the actual duration of the animation

            }
            
            
            if (current_board[current_row].join("") == right_word) {
                finishGame();
            }

            current_row ++;
            current_item = 0;
        }
        
        if ( current_row == rowsCount) {
            finishGame();
        }
        
        fillingRow = false;
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
        if (current_item > wordLength-1) {
            return;
        }
        if (isFinished) {
            return;
        }

        cellAnimators[current_row][current_item].triggerAnimation('pop')
        const container = GetElementInsideContainer(`row-${current_row}`, `item-${current_item}`)
        container.textContent = letter

        current_board[current_row][current_item] = letter
        current_item += 1
    }

    function finishGame() {
        if (isFinished) {
            return;
        }

        isFinished = true;
        new Answer({
            target: document.getElementById("errors-container"),
            props: {
                answer: right_word
            }
        })


    }

</script>

<section id="errors">
    <div id="errors-container">
    </div>
</section>


<section id="playing-grid">
    {#each Array(rowsCount) as input, j}
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
        padding-top: 1.5rem;
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
        z-index: -1;
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
        z-index: -1;
    }

    @keyframes pop {
    50%  {transform: scale(1.2);}
    }

    :global(.rotate) {
        transition: transform 0.4s;
        transform: rotateX(90deg);
        z-index: -1;
    }
    :global(.rotateBack) {
        transition: transform 0.4s;
        transform: rotateX(0deg);
        z-index: -1;
    }
</style>