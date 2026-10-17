---
created: 2026-07-12 21:20
tags:
  - Programming/Web
  - Literature/Writing/Technology/Software
  - Literature/Writing/Projects
title: Arithmetic Progression App
description: A simple python script that turned into a website for my 10th grade math teacher coz why not
---
## Backstory
### Python Script
- I always loved using Python to implement something that I learned in Math class as I have mentioned in [[programming-journey]] and so, I had to do something about it when I learned about Arithmetic Progression.
- I made two files, one for finding the series and one for finding the Sum of the series, with ability to change what variables to use.

- The files are: [series.py](https://arithmatic-progression.netlify.app/series.py) and [sum.py](https://arithmatic-progression.netlify.app/sum.py)

### Wanting to Show it to Math Teacher
- I soon got to know that our Math Ma'am also has done some stuff related to programming while working on [[kv-library-website]] and you bet I wanted to show her the scripts.
- But unfortunately, she has to get transfered so, I thought of making a website and having a cool UI interface for her to use it

## Development
- Now, I could've used Django or Flask with HTML Templating and achieved the jobsbut... I did something else and I am really proud of my old self to do that
- I wanted to run the Python scripts somehow through a Svelte Page coz... I wanted to learn to use Svelte and also coz I wanted a challenge

- I knew about the [Piston API](https://piston.readthedocs.io/en/latest/api-v2/) from the time when I was developing my [[jak-discord-bot|discord bot]] so... I used that to run the scripts as needed.
- Made a cool looking UI too in SvelteJS & Tailwind with Vite and hooked the API requests from Piston into it. Yea the scripts are static files.

- -> Link: [https://arithmatic-progression.netlify.app/](https://arithmatic-progression.netlify.app/) | Its not working rightnow coz there is a change in the piston api I think

![[jak-arithmetic-progression-app.png]]