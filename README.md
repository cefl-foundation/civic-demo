# Repackage what we already have: a demo for civic and community partnerships

One web page for University of Bedfordshire colleagues, made for the café on civic and community partnerships. It shows how the Centre for English as a Foreign Language (CEFL) teaches people who start a long way from a subject, who the University could reach in its own towns, the Tech Practice Hub built on that teaching, and how the same films and tasks could be repackaged for local audiences.

It is a demo, not an official University page, and it says so in the black strip at the top and in the footer.

## Open it

Double-click `index.html`. The page, the pictures and the films are all in this folder. Only the links to the Hub and to the sources in the footer need a connection.

To see the working notes (what to check, what is still to add), add `?notes` to the end of the address. Without it they stay hidden.

## The story, part by part

The page is made from parts of five earlier prototype pages, put in one order and numbered again.

| Part | Headline | From |
| --- | --- | --- |
| Opening | Repackage what we already have. | The page for Marketing and Recruitment, made shorter, like a landing page. Each arch shows a laptop under a round picture |
| 1 · The people we could reach | Five people we could reach. | The page about local adults, with someone at a laptop and the Hub moving on its screen. Three groups (mature learners, additional needs, and English as an additional language) are labels under the headline, each person has a picture and a first step through CEFL in their own field, and the sixth card says who is in each group and what can hold them back |
| 2 · On the Hub | Very easy tasks come first. | New: the Hub's Python practice page scrolling on a laptop, and three films, one about working in an international team |
| 3 · How we teach | Words first. Code the same week. | The page about local adults, plus the smart fridge |
| 4 · Access | Built for the learner who finds it hardest. | The page about local adults |
| 5 · From this to this | From this to this. | The page for Marketing and Recruitment, with three new prototype tasks on tablets, one for small businesses with Making Tax Digital and a first prompt for AI |
| 6 · Already built | Built once. Repackaged five times. | The page for Marketing and Recruitment |
| 7 · One place, one audience | Example path: customised for local policing. | The police page for colleagues, starting with "Every case has a digital side." |
| 8 · The gap, and the first step | A big gap. A short first step. | The police page for colleagues, with the road from one level to a degree, CEFL's first two steps marked, and a box on what CEFL brings |
| 9 · Try it | One possibility: a guided trial. | New, placed straight after the road |
| 10 · A customised path: cyber security | One day, five towns. Every case has a screen. | The police page for colleagues |
| 11 · Fits a rota | Ten minutes fits any rota. | The police page for colleagues |
| 12 · Customised paths: local adults | Many starting points. One network. | The page about local adults |
| 13 · CEFL and Computer Science | Already working together. | New, with the two names big |
| 14 · Questions colleagues ask | Questions colleagues may ask. | The police page for colleagues |
| 15 · Who we are | CEFL. The strength is already here | The page for Marketing and Recruitment, moved to the end: an arch with a globe and a speech bubble, four coloured cards, who to talk to with a cup of coffee, and the skyline from the first police page |

The red menu has eleven tabs. It stays at the top of the window on a laptop, and marks the tab for the part being read.

## Files

| File or folder | What it is |
| --- | --- |
| `index.html` | The page: all the words, in order |
| `css/site.css` | The look. GUIDE.md explains how it is organised |
| `js/page.js` | Three small jobs: showing the notes when the address ends with `?notes`, starting the films, and marking the current tab |
| `assets/brand/` | The University's logo, as on the Hub, and the tab icons made from its red mark |
| `assets/arches/` | The two pictures in the arches of the opening: a laptop under a round picture, showing a task on the Hub, and the prototype cyber security task from part 5 |
| `assets/films/` | Eleven short films of the Hub (MP4, no sound), and a still picture for each |
| `assets/scenes/` | Three drawings: the local map, the smart fridge, and the skyline at dawn |
| `assets/shots/` | Pictures of the openings of four earlier prototype pages |
| `fonts/` | The headline typeface and its licence |
| `GUIDE.md` | How the page is put together, and where to change each thing |
| `.nojekyll` | A one-line file that tells GitHub Pages to publish the folder as it is |

## What is still to add or check

Eleven working notes on the page say what. The main ones:

- **To check:** the words about additional needs, with the disability team.
- **To check:** a local adult would join the home Foundation Year, not the international group. Ask its team before promising the same teaching.
- **To check:** two of the first steps in part 1 (the week in Python, and the night rota) are new tasks, not on the Hub yet.
- **To add:** the link to the one-minute video and the goodbye video in part 9, once they are filmed.
- **To add:** anything else CEFL shares with Computer Science, in part 13.

## Before it goes online

- Anyone who has the address of a GitHub Pages site can open it. The page quotes no staff documents.
- The page uses the University's logo, name and colours. It says it is a demo for colleagues and not an official page, and one line in `index.html` asks search engines not to list it: `<meta name="robots" content="noindex">`. Leave both in.
- The five people in part 1 and the cases in part 10 are made up, and the page says so in its footer. The three tasks on the right of part 5 are prototypes, not tasks on the Hub, and each caption says so.
- Part 15 gives the names, roles and work contact details of three colleagues, as on their University staff pages.

## Not checked

A screen reader, Safari, Firefox and a real phone. The page was checked in Chrome only, at eleven window widths from a small phone to a wide monitor.
