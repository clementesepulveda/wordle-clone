# Wordle Clone

To play, you can access this link: https://clementesepulveda.github.io/wordle-clone/

Have been playing Wordle for quite a long time, so I wanted to see if I could recreate it using Svelte. It's not 100% perfect, but I would say it's a pretty good recreation. I did not make this to make money or to gain anything from this, the original is still a lot better (please don't sue me for copying, it's just a fun little project). It's more of a challenge for my own enjoyment. 

## What could be better about it?

1. It uses a random word generator API to generate the answers, so some words are pretty tricky to get. It could use a more curated list of words.
2. It uses another API to check if guessed words are actual words. No problem in this, but I could problably install a dependency so it could be used offline. 
3. The 2 APIs used (random word generator and the words checker) for some reason don't align perfectly 100%, so you might get a random word that the word checker thinks is not a real word. I just kept generating answers until I get a word that returns `true` by the word checker, but it would be fixed by using a better answer pool.
4. Doesn't keep track of your score or statistics. 
5. Doesn't have a analysis bot. That sounds pretty complex compared to the actual game. 
6. Share button. It's a minor thing, but I think it's pretty neat.
7. No how to play screen.
8. No differentt settings (like changing theme, hard mode, high contrast mode)



## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Deploying

To deploy to github pages:

```bash
npm run gh-pages
```

If you fork this project, you will need to change some configurations in some files.
