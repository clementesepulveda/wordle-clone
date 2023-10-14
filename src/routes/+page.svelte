<script>
    // TODO you are evading the error
    // @ts-nocheck

    import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
    import Error from '../components/NotEnoughLettersError.svelte'
    import LetterInput from '../components/LetterInput.svelte';

	let right_word = "";
	onMount(async () => {
        const res = await fetch("https://random-word-api.herokuapp.com/word?length=5");
		right_word = await res.json();
        right_word = right_word[0].toUpperCase();
        console.log(right_word)
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

    function isRealWord() {
        if (current_board[current_row].includes("")) {
            new Error({
                target: document.getElementById("errors-container")
            })
            return;
        }
        // TODO implement
        return true;
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
        console.log(letters_guesses)
        if (e.code === "Enter") {
            enterKey();
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

    function enterKey() {
        if (isRealWord()) {
            for (let i = 0; i < 5; i++) {
                const container = GetElementInsideContainer(`row-${current_row}`, `item-${i}`)
                const right_char = right_word[i];
                const guessed_char = current_board[current_row][i];

                if (right_char === guessed_char) {
                    container.classList.add("right-place")
                    letters_guesses[guessed_char] = "right-place"
                } else if (right_word.includes(guessed_char)) {
                    container.classList.add("wrong-place")
                    if (letters_guesses[guessed_char] != "right-place") {
                        letters_guesses[guessed_char] = "wrong-place"
                    }
                } else {
                    container.classList.add("wrong-letter")
                    if (letters_guesses[guessed_char] == "trans-back") {
                        letters_guesses[guessed_char] = "wrong-letter"
                    }
                }
            }
            
            current_row += 1;
            current_item = 0;
        }
    }

    function addLetter(letter) {
        if (current_item > 4) {
            return;
        }

        const container = GetElementInsideContainer(`row-${current_row}`, `item-${current_item}`)
        container.textContent = letter

        current_board[current_row][current_item] = letter
        current_item += 1
    }

</script>

<section id="navbar">
    Wordle
</section>

<section id="errors">
    <div id="errors-container">
    </div>
</section>

<section id="playing-grid">
    {#each Array(rows) as input, j}
          <div class="row" id="row-{j}">
            {#each Array(word_length) as input, i}
              <div class="item" id=item-{i} transition:fade={{ delay: 250, duration: 300 }}>{current_board[j][i]}</div>
            {/each}
          </div>
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
        <LetterInput letter="ENTER" onclick={enterKey}/>
        {#each "ZXCVBNM" as item, i}
            <LetterInput letter={item} state={letters_guesses[item]} onclick={() => addLetter(item)}/>
        {/each}
        <LetterInput letter="BACK"onclick={eraseCharacter}/>
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
        text-align: center;
        font-size: 3rem;
        line-height: 4rem;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    
    #playing-grid {
        padding: 0.6rem;
        /* background-color: blue; */
    }

    .row {
        /* background-color: red; */
        display: flex;
        justify-content: center;
    }

    .item {
        width: 3.8rem;
        height: 3.8rem;
        border: 1px solid #3A3A3C;
        margin: 0.1rem;

        font-size: xx-large;
        color: white;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-weight: 1000;

        line-height: 3.8rem;
        text-align: center;
    }
    
    :global(.wrong-place) {
        background-color: #B59F3B;
    }
    :global(.wrong-letter) {
        background-color: #3A3A3C;
    }
    :global(.right-place) {
        background-color: #538D4E;
    }

    #errors {
        display: flex;
        justify-content: center;


    }

    #errors-container {
        position: absolute;
    }

    .guessed-letters-row {
        display: flex;
        justify-content: center;
    }
</style>