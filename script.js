(function () {
  "use strict";

  var quoteEl = document.getElementById("quote");
  var button = document.getElementById("new-quote");

  // Remember the last index so we never show the same quote twice in a row.
  var lastIndex = -1;

  function pickQuote() {
    if (!LOG_LADY_QUOTES.length) {
      return "...";
    }
    if (LOG_LADY_QUOTES.length === 1) {
      return LOG_LADY_QUOTES[0];
    }

    var index;
    do {
      index = Math.floor(Math.random() * LOG_LADY_QUOTES.length);
    } while (index === lastIndex);

    lastIndex = index;
    return LOG_LADY_QUOTES[index];
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
