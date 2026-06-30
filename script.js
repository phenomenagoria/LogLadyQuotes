(function () {
  "use strict";

  var quoteEl = document.getElementById("quote");
  var button = document.getElementById("new-quote");

  // The pool: canonical show quotes plus the in-voice bush quotes, if present.
  var QUOTES = LOG_LADY_QUOTES.slice();
  if (typeof LOG_LADY_BUSH_QUOTES !== "undefined") {
    QUOTES = QUOTES.concat(LOG_LADY_BUSH_QUOTES);
  }

  // Remember the last index so we never show the same quote twice in a row.
  var lastIndex = -1;

  function pickQuote() {
    if (!QUOTES.length) {
      return "...";
    }
    if (QUOTES.length === 1) {
      return QUOTES[0];
    }

    var index;
    do {
      index = Math.floor(Math.random() * QUOTES.length);
    } while (index === lastIndex);

    lastIndex = index;
    return QUOTES[index];
  }

  function showQuote() {
    // Fade out, swap text, fade back in.
    quoteEl.classList.add("is-fading");

    window.setTimeout(function () {
      quoteEl.textContent = "“" + pickQuote() + "”";
      quoteEl.classList.remove("is-fading");
    }, 250);
  }

  button.addEventListener("click", showQuote);

  // Show a first quote on load.
  quoteEl.textContent = "“" + pickQuote() + "”";
})();
