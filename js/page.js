/*
  A demo for civic and community partnerships: three small jobs
  -------------------------------------------------------------
  The page works without this file. The script adds three conveniences.

  1. The notes. Working notes (what to check, what is still to add) are
     written in index.html inside elements marked data-note. They are
     hidden unless the <html> element has the class "show-notes". The
     button in the footer switches that class on and off, and so does
     adding ?notes to the end of the address.

  2. The films. Each film starts when it scrolls into view and pauses when
     it scrolls away. The films have no sound, so browsers allow this.
     People who ask their device for less motion get a still picture with a
     play button instead.

  3. The menu. The red tab for the part of the page you are reading is
     marked, as the tab for the current page is marked on the Hub.

  This script is loaded in the <head>, so the "show-notes" class is set
  before the page is drawn. The button, the films and the menu do not exist yet
  at that moment, so everything else waits for DOMContentLoaded.
*/
(function () {
  "use strict";

  const root = document.documentElement; // the <html> element

  /* ---------- 1. The notes ---------- */

  // Decide before the page is drawn: does the address end with ?notes
  if (/[?&]notes\b/.test(window.location.search)) {
    root.classList.add("show-notes");
  }

  // Show or hide the notes, and make the button say what it will do next.
  function showNotes(on) {
    root.classList.toggle("show-notes", on);
    const button = document.getElementById("notes-switch");
    if (button) {
      button.setAttribute("aria-pressed", String(on));
      button.textContent = on ? "Hide the working notes" : "Show the working notes";
    }
  }

  function startNotes() {
    const button = document.getElementById("notes-switch");
    if (!button) {
      return;
    }
    button.hidden = false; // index.html hides the button until this script is here to run it
    showNotes(root.classList.contains("show-notes")); // set the button's words
    button.addEventListener("click", function () {
      showNotes(!root.classList.contains("show-notes"));
    });
  }

  /* ---------- 2. The films ---------- */

  // Start a film. play() gives back a promise in modern browsers, and the
  // promise fails if the browser refuses, so the failure is caught here.
  function play(film) {
    film.muted = true;
    const started = film.play();
    if (started && typeof started.catch === "function") {
      started.catch(function () {
        // The browser said no. The play button on the film still works.
      });
    }
  }

  function startFilms() {
    const films = document.querySelectorAll("video");
    const calm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (films.length === 0 || calm || !("IntersectionObserver" in window)) {
      return; // the films stay as still pictures with a play button
    }

    // Films the visitor has paused by hand. The page leaves those alone.
    const pausedByVisitor = new WeakSet();
    // Films this script has just paused, so the "pause" event below can
    // tell the script's pause from the visitor's.
    const pausedByPage = new WeakSet();

    // The observer calls this function whenever a film passes the point
    // where 60% of it is on the screen, in either direction.
    const watcher = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          const film = entry.target;
          if (entry.isIntersecting) {
            if (!pausedByVisitor.has(film)) {
              play(film);
            }
          } else if (!film.paused) {
            pausedByPage.add(film);
            film.pause();
          }
        });
      },
      { threshold: 0.6 }
    );

    films.forEach(function (film) {
      film.addEventListener("pause", function () {
        if (pausedByPage.has(film)) {
          pausedByPage.delete(film);
        } else {
          pausedByVisitor.add(film);
        }
      });
      film.addEventListener("play", function () {
        pausedByVisitor.delete(film);
      });
      watcher.observe(film);
    });
  }

  /* ---------- 3. The menu ---------- */

  function startMenu() {
    const menu = document.querySelector(".nav");
    if (!menu) {
      return;
    }
    // Each tab is a link such as <a href="#strength">. Its part of the page
    // is the element with that id: here, the one with id="strength".
    // A tab can stand for more parts, named in data-also, such as
    // <a href="#policing" data-also="why-policing">. "places" lists every
    // part with the number of its tab.
    const tabs = Array.from(menu.querySelectorAll('a[href^="#"]'));
    const places = [];
    tabs.forEach(function (tab, number) {
      const ids = [tab.getAttribute("href").slice(1)];
      const also = tab.getAttribute("data-also");
      if (also) {
        also.split(" ").forEach(function (id) {
          if (id) {
            ids.push(id);
          }
        });
      }
      ids.forEach(function (id) {
        const part = document.getElementById(id);
        if (part) {
          places.push({ part: part, tab: number });
        }
      });
    });

    // Find the part being read, and mark its tab. css/site.css gives a tab
    // with aria-current the darker red and the white line.
    function mark() {
      // The reading line: a third of the way down the window.
      const line = window.innerHeight / 3;
      let current = 0;
      let nearest = -Infinity;
      places.forEach(function (place) {
        // getBoundingClientRect().top is how far the top of the part is
        // from the top of the window. Below zero means it has scrolled past.
        const top = place.part.getBoundingClientRect().top;
        // Of the parts whose top is above the line, the one nearest to the
        // line is the part being read.
        if (top <= line && top > nearest) {
          nearest = top;
          current = place.tab;
        }
      });
      // At the very end of the page the last part may be too short to reach
      // the line, so the last tab is marked there.
      const end = root.scrollHeight - window.innerHeight;
      if (window.scrollY >= end - 2) {
        current = tabs.length - 1;
      }
      tabs.forEach(function (tab, number) {
        if (number === current) {
          tab.setAttribute("aria-current", "location");
        } else {
          tab.removeAttribute("aria-current");
        }
      });
    }

    // Scrolling fires many events a second. "waiting" lets only one check
    // run for each time the browser redraws the page.
    let waiting = false;
    function onMove() {
      if (waiting) {
        return;
      }
      waiting = true;
      window.requestAnimationFrame(function () {
        waiting = false;
        mark();
      });
    }

    window.addEventListener("scroll", onMove, { passive: true });
    window.addEventListener("resize", onMove);
    mark();
  }

  /* ---------- Start, once the page exists ---------- */

  document.addEventListener("DOMContentLoaded", function () {
    startNotes();
    startFilms();
    startMenu();
  });
})();
