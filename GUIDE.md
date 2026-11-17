# How the page works: a guide to the code

This page is built like the earlier prototype pages: plain HTML, CSS and JavaScript, no framework and no build step. To change something, edit the file, save it, and refresh the browser. This guide explains what is different about this page, and where to change each thing.

## 1. The three files

| File | Job | Lines |
| --- | --- | --- |
| `index.html` | The words and their order | about 1,150 |
| `css/site.css` | The look | about 5,240 |
| `js/page.js` | The notes switch, starting the films, marking the current tab | about 190 |

## 2. `index.html`: one page made of parts

### Finding a part

Each part starts with a comment in capitals between two rows of equals signs, with its number. Search for the number and the name, for example `11. A CUSTOMISED PATH`, to jump there.

### Each part sits in a box named after the page it came from

```html
<!-- ============================== 1. THE PEOPLE WE COULD REACH ============================== -->
<div class="from-community">
<section class="chapter chapter-white" id="stories" aria-labelledby="stories-title" tabindex="-1">
  ...
</section>
</div>
```

The parts come from four earlier pages, and each of those pages had its own stylesheet. Two of them could use the same class name for different things: `.questions` was a row of cards on one page and a grid of four questions on another. So each part is wrapped in a `<div>` that names its page:

| Class | The page it came from |
| --- | --- |
| `from-repack` | The page for Marketing, Recruitment and International |
| `from-community` | The page about local adults |
| `from-police` | The first page for people in policing |
| `from-police2` | The page for colleagues about policing |

The new parts (5, 10 and 14, and the smart fridge in 3) sit in `from-community` boxes, so they share that page's bands and headlines. Part 2, on the Hub, sits in a `from-police` box for the same reason.

### Ids must be used once

Each part has an `id`, such as `id="stories"`, and a tab jumps to it with `href="#stories"`. The same `id` must not appear twice on a page. Two earlier pages both had a part with `id="questions"`; on this page only part 15 has it.

### The two groups and the pictures in part 1

The groups are labels under the headline (`<ul class="group-key">`): mature learners, additional needs, and English as an additional language. Each card has small coloured labels too, such as:

```html
<span class="tag tag-mature">Mature learner</span>
<span class="tag tag-needs">Additional needs</span>
<span class="tag tag-eal">EAL</span>
```

Each card's class gives it the coloured line on top: `postcard-mature` (plum), `postcard-needs` (teal) or `postcard-both` (half and half). To move a person to another group, change their labels and that class, and then the sixth card, `postcard-key`, which says who is in each group.

Each picture is a line icon, drawn once near the top of the page and used by its name:

```html
<span class="person-icon icon-navy" aria-hidden="true"><svg focusable="false"><use href="#l-bus"/></svg></span>
```

- `#l-bus` is the name of the drawing. The others are `l-calendar`, `l-boxes`, `l-code` and `l-care` for the five people, `l-award`, `l-research`, `l-columns` and `l-laptop` for the cards in part 16, and `l-shield` and `l-receipt` for the tasks in part 6. `l-flag`, `l-people` and `l-laptop` are on the contact cards in part 16. Each one is a `<symbol id="l-…">` in the `<svg class="icon-store">` near the top of `index.html`.
- `icon-navy` is the colour of the circle. The others are `icon-plum`, `icon-green`, `icon-teal` and `icon-red`.
- `aria-hidden="true"` hides the picture from screen readers: the words on the card already say who the person is.

### The arch and the contacts in part 16

The picture next to the headline is `<div class="cefl-arch">`: the round-topped arch of the opening, drawn with `border-radius: 999px 999px 0 0`. Inside it is a globe and a speech bubble, drawn in SVG: English as a foreign language. To change the word in the bubble, change the text of `<text class="cefl-globe-word">`. Next to "Who to talk to", a cup of coffee and two speech bubbles are another SVG drawing (`<svg class="contacts-cafe">`). Both pictures are `aria-hidden="true"`, because they add nothing a screen reader needs.

The contacts are three cards in `<ul class="contact-cards">`, in this order: Katy Robertson-Hohmann, John Lapwood, Monika Pietruch. Each email address is a link that opens an email (`href="mailto:…"`), and each phone number a link that rings it on a phone (`href="tel:+44…"`, the number written without its first 0).

### Someone at a laptop in part 1

The picture is a stage (`<div class="watch-stage">`) with five layers placed on it with `position: absolute`: a pale plum circle, a laptop drawn with CSS with the Hub's film on its screen, the person seen from behind (an SVG), a plant (an SVG), and the desk. The person comes after the laptop in the HTML, so the browser draws it in front.

### The three prototype tasks in part 6

On the right of each pair in part 6 is a task that is not on the Hub yet. It is built in HTML, not a picture, so its words stay sharp at any size and can be edited:

```html
<div class="mock mock-cyber" role="group" aria-label="A prototype task for people in policing: Spot the strange log-in">
  <div class="mock-head"> ... the small line and the title ... </div>
  <div class="mock-body"> ... the brief, the table or the code ... </div>
</div>
```

- `mock-cyber` is navy, `mock-adult` is teal and `mock-access` is the Hub's own black and red.
- The second task has no code. Its spreadsheet (`<div class="mock-sheet" aria-hidden="true">`) is a picture for sighted readers, and the hidden sentence under it (`<p class="visually-hidden">`) says the same for a screen reader. If you change a number in one, change it in the other. The three steps of the automation are a list, `<ol class="mock-flow">`, and the arrows between them come from the CSS.
- Each task sits inside `<div class="device-tablet">`, which draws the dark tablet frame and its camera dot round it.
- `role="group"` and `aria-label` tell a screen reader that the box is one thing, and what it is.
- In the third task, the red numbers in circles are `<span class="callout" aria-hidden="true">1</span>`. They are pictures for sighted readers, so a screen reader skips them and reads the numbered list under the task instead (`<ol class="mock-legend">`). The browser numbers that list itself, so the numbers stay right if a line is added.

### Two columns that stack on a phone: parts 6 and 13

Two boxes on this page are two columns side by side on a laptop and one column on a phone: the next ones in part 6 (`<div class="next-cols">`, local on the left, abroad and online on the right) and “Who offers what” in part 13. Part 13’s box looks like this:

```html
<div class="offers">
  <h3 class="offers-title">Who offers what</h3>
  <div class="offers-cols">
    <p class="offer offer-cefl"> ... what CEFL offers ... </p>
    <p class="offer offer-cs"> ... what the School of Computer Science and Technology offers ... </p>
  </div>
</div>
```

- `<h3>` makes “Who offers what” a real heading on its own line, so a screen reader can jump to it.
- `offer-cefl` gives its card a teal line along the top and `offer-cs` a navy one: the same colours as “From CEFL” and “From the School of Computer Science and Technology” in part 14.

The columns come from these rules in section 4 of `css/site.css`:

```css
#paths .offers-cols {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
}

@media (max-width: 40rem) {
  #paths .offers-cols {
    grid-template-columns: minmax(0, 1fr);
  }
}
```

- `#paths` at the front means “inside part 13”, the part with `id="paths"`, so the rule reaches no other part.
- `display: grid` lines the cards up in columns. `repeat(2, minmax(0, 1fr))` makes two columns of the same width: `1fr` is one share of the free space, and `minmax(0, …)` lets a column get narrower than its longest word instead of pushing out of the box.
- `gap` is the space between the cards.
- `@media (max-width: 40rem)` uses the rule inside it only when the window is 40rem (640 pixels) wide or less. There the box has one column, so the cards stack.

Part 6’s `.next-cols` works the same way, with its own rules just above.

The other parts work exactly as on the earlier pages: headlines in two halves (`<span>…</span> <span>…</span>`), films with `controls muted loop playsinline preload="none"`, working notes in `<div data-note>`, and links that open in a new tab with `target="_blank" rel="noopener"`. The GUIDE.md of any earlier page explains them line by line.

## 3. `css/site.css`: one stylesheet in five sections

| Section | What it holds |
| --- | --- |
| 1. Colours and fonts | Every colour of every earlier page, in one `:root`, and the headline font |
| 2. Basics | The black strip, the red menu, buttons, headlines, notes: shared by all parts |
| 3. The parts, page by page | Four blocks, one per earlier page |
| 4. What this page adds | The short opening line, someone at a laptop and the films on laptops, the two groups and the pictures of the five people, the smart fridge, the three prototype tasks on tablets and the two columns of next ones in part 6, the gap figures and the road, the guided task, the “Who offers what” box in part 13, the two big names in part 14, the arch picture, cards and contacts in part 16, the skyline, the footer |
| 5. Small screens | For the parts this page adds |

In section 3 every rule starts with its page's box name:

```css
.from-community .chapter h2 {
  font-size: clamp(2.35rem, 6vw, 4.75rem);
}
```

The space between `.from-community` and `.chapter` means "a `.chapter h2` inside a `.from-community` box". So this rule reaches the headlines of the parts from the page about local adults, and no others. Each block is a copy of that page's own rules with the box name added at the front, so the parts look as they did on their own pages.

### Four small new things in section 4

```css
.nav {
  --tab-pad: clamp(0.85rem, 1.2vw, 1rem);
}
```

The menu has twelve tabs. `--tab-pad` is the space on each side of a tab's word: at least `0.85rem`, at most `1rem`, and in between it grows with the window (`1.2vw` is 1.2% of the window's width). The two rules under it use the same value, so the twelve tabs fit on one line on a laptop and the first word still lines up with the logo.

```css
.from-repack .chapter h2.cefl-title span:first-child {
  font-size: clamp(3.4rem, 9vw, 7.25rem);
}
```

This makes the first half of part 16's headline, "CEFL.", about twice the size of the second half. `span:first-child` means "the first `<span>` inside the headline", so the second half keeps its normal size.

```css
.fridge-code code,
.guided-code code {
  white-space: pre;
}
```

The page's rule for `code` keeps a line of code from breaking in two (`white-space: nowrap`). Inside these code blocks, `pre` keeps each line on its own line instead.

```css
.device-laptop-screen video {
  display: block;
  width: 100%;
  height: auto;
}
```

The films in parts 1 and 2 play on laptops drawn with CSS. The film fills the screen's width, and its height follows from the `width` and `height` written on its `<video>`. The film in part 2 was made from a picture of the Hub's Python page, moving slowly down to the last task and back up.

## 4. `js/page.js`

The same file as on the earlier pages, with a new title in its first comment. It needs no changes when parts are added or removed: it finds every film and every tab on the page by itself. This page has no notes button in its footer, and the script simply skips that job: add `?notes` to the address to see the notes.

## 5. How to change things

### Change a sentence

**Where:** `index.html`. Search for a few words of the sentence, edit, save, refresh. Keep the tags round the words.

### Remove a part

**Where:** `index.html`. Delete from the part's comment (for example `<!-- ===… 11. FITS A ROTA ===… -->`) down to the closing `</div>` of its box, just before the next comment. If the part had a tab, delete its `<a href="#…">` line under `THE RED MENU` too. The numbers of the parts after it stay as they are until you change their eyebrows (the small red line above each headline).

### Move a part

**Where:** `index.html`. Cut a whole part, from its comment to the closing `</div>` of its box, and paste it between two other parts. Change the numbers in the eyebrows and comments so they run in order.

### Change a prototype task in part 6

**Where:** `index.html`, under `6. FROM THIS TO THIS`, inside the `<div class="mock …">` of that task. Edit the words, the table or the code as you would any sentence. In code, `&lt;` stands for the `<` sign and `&gt;` for the `>` sign, which HTML would otherwise read as part of a tag.

### Change the two numbers in part 5

**Where:** `index.html`, under `5. WHY POLICING: TWO NUMBERS, ONE GAP`, inside `<ul class="why-figs">`. Each number is one `<li>`: the big number is in `<span class="why-fig">`, and the words under it in `<span class="why-fig-words">`. If you change a number, change its source too: in the line `<p class="why-src">` just under the numbers, and in the footer's list of sources.

The band's dark navy comes from `--night` in section 1 of `css/site.css`, and its rules start with `.why-` in section 4. The red highlight on "It should take ten minutes." is `.why-rule span + span`: the second `<span>` of that line.

### Change the contacts in part 16

**Where:** `index.html`, under `16. WHO WE ARE: CEFL, AND WHO TO TALK TO`, inside `<div class="contacts">`. Each person is one `<li class="contact-card …">`. Change the words, then the address in both places on its line: after `mailto:` and between the tags.

### Change who offers what in part 13

**Where:** `index.html`, under `13. CUSTOMISED PATHS: LOCAL ADULTS`, inside `<div class="offers">`. Change the words inside each `<p class="offer …">`. To add a third card, copy one whole `<p class="offer …">…</p>` line, paste it under the second one, and then, in `css/site.css`, in the rule `#paths .offers-cols`, change `repeat(2,` to `repeat(3,`.

### Change the tab icon

**Where:** `assets/brand/favicon.png` (64 by 64 pixels) and `assets/brand/apple-touch-icon.png` (180 by 180, for phones), both made from the University's red mark. The two `<link>` lines that use them are in the `<head>` of `index.html`.

### Change the pictures in the arches

**Where:** `assets/arches/`. Each picture is a laptop under a round picture, 512 pixels wide and 592 high: `what-we-built.jpg` shows a task on the Hub, and `what-it-could-be.jpg` the cyber security task from part 6. A new picture must have the same size and name, or the arch crops it. If you change a picture, change its description too: in `index.html`, under `THE OPENING`, the `alt="…"` of its `<img>`.

### Change the smart fridge

- The picture: `assets/scenes/smart-fridge.svg`, a drawing written in SVG. Open it in a text editor: the words on the fridge's screen and the phone are the `<text>` lines.
- The words and the code: `index.html`, under `3. HOW WE TEACH: WORDS FIRST, AND THE SMART FRIDGE`, inside `<div class="fridge-show">`.

### Add the videos to part 10

**Where:** `index.html`, under `10. TRY IT: A GUIDED FIRST TASK`. Each empty place for a video is:

```html
<div class="video-slot"><span class="video-play" aria-hidden="true"></span><span>Video to add</span></div>
```

When a video is on YouTube, replace that line with a link, for example:

```html
<p class="guided-link"><a class="button button-red" href="https://www.youtube.com/watch?v=VIDEO-ID" target="_blank" rel="noopener">Watch the video<span class="visually-hidden"> (opens YouTube in a new tab)</span></a></p>
```

Replace `VIDEO-ID` with the video's own code from its address. Then delete the working note under the four steps.

### Fill in a working note

**Where:** `index.html`. Search for `data-note`. There are eleven blocks, holding fourteen notes. They are hidden unless the address ends with `?notes`. Do what the note says, then delete the whole block, from `<div data-note>` to its `</div>`.

### Add the Hub link in part 10

The "Open the Hub" button in part 10 is switched off for now, with "Link to be added" under it. It is the page's only link to the Hub.

**Where:** `index.html`, under `10. TRY IT`. Search for `Link to be added`. Replace that whole line:

```html
<p class="guided-link"><span class="button button-off">Open the Hub</span><span class="link-later">Link to be added</span></p>
```

with this one, putting the Hub's address in place of `ADDRESS`, between the quotation marks:

```html
<p class="guided-link"><a class="button button-red" href="ADDRESS" target="_blank" rel="noopener">Open the Hub<span class="visually-hidden"> (opens in a new tab)</span></a></p>
```

- `<a … href="…">` makes it a link again, and `button-red` gives it back its red colour.
- `target="_blank"` opens the Hub in a new tab, and the hidden words "(opens in a new tab)" tell a screen reader so.

### Change a colour

**Where:** `css/site.css`, section 1, inside `:root { … }`. Change the value after the colon; everything that uses that colour changes with it.

## 6. Put it online with GitHub Pages, from the terminal

Before you start: make an empty repository on GitHub, in the account or organisation where the page should live, with no README. Its name becomes part of the address. On GitHub's free plan, Pages needs the repository to be public.

Then, in the terminal, go into the page's folder (replace the path with yours if the folder is somewhere else, and `ACCOUNT` and `REPOSITORY` with yours):

```
cd ~/projects/civic-demo
ls -a
git init
git add .
git commit -m "Add the civic and community demo page"
git branch -M main
git remote add origin https://github.com/ACCOUNT/REPOSITORY.git
git push -u origin main
```

- `ls -a` lists everything in the folder, hidden files too. Check it shows only the page's own files and folders, including `.nojekyll`, before you commit.
- `git add .` stages every file in the folder, so add nothing to the folder that should not be public.

Then on GitHub: open the repository, Settings, Pages. Under "Build and deployment" choose "Deploy from a branch", branch `main`, folder `/ (root)`, and Save. After a minute or two the address is `https://ACCOUNT.github.io/REPOSITORY/`.

To change the page later: edit the files in the same folder, then

```
git add .
git commit -m "Say what you changed"
git push
```

The live page updates a minute or two after the push.
