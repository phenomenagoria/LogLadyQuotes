# The Log Lady Speaks

A tiny quote generator for the Log Lady (Margaret Lanterman) from David Lynch's
*Twin Peaks*. Press the button and the log has something else to tell you.

It's a static site — just HTML, CSS, and a little vanilla JavaScript — so it
runs anywhere and hosts for free on GitHub Pages.

## Files

| File         | Purpose                                  |
| ------------ | ---------------------------------------- |
| `index.html` | Page markup                              |
| `styles.css` | Cabin-at-night styling                   |
| `quotes.js`  | The collection of quotes                 |
| `script.js`  | Picks a quote and wires up the button    |

## Run it locally

No build step. Open `index.html` directly in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Host on GitHub Pages

1. Go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to *Deploy from a branch*.
3. Choose the `main` branch and the `/ (root)` folder, then **Save**.
4. Wait a minute, then visit `https://<your-username>.github.io/LogLadyQuotes/`.

No default-branch change is required — *Deploy from a branch* lets you pick
`main` directly. (The site is plain static files, so GitHub serves them as-is;
the included `.nojekyll` file disables Jekyll processing.)

## Add your own quotes

Open `quotes.js` and add strings to the `LOG_LADY_QUOTES` array. That's it.
