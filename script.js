# The Erasmus+ Future Forum — website

A simple 3-page website you can host anywhere and edit yourself.

```
index.html            → Home + the key demands
position-paper.html   → The position paper
the-forum.html        → The Forum (what it was, who came, photos)
styles.css            → The look (colours, fonts, layout) — shared by all pages
script.js             → Small animation script
img/                  → All the photos
```

---

## 1. Editing the text yourself

Open the page you want to change in any plain-text editor
(Notepad, TextEdit, VS Code — or right in your browser on GitHub, see below).

- **The words are safe to change.** Find the text, type over it, save.
- **Don't change anything inside `< >` tags**, and don't touch `styles.css`
  unless you know CSS.
- Each page has a short **"HOW TO EDIT THIS PAGE"** note near the top telling
  you where the main things live (dates, demands, network names, email, etc.).

### Swapping a photo
Replace the file inside the `img/` folder with a new photo that has the
**same file name** (e.g. save your new picture as `group.jpg` over the old one).
Keep it a similar shape (landscape vs. portrait) and around the same size.
Or just send the new photos to me and I'll drop them in.

### Adding the final position paper
Open `position-paper.html`, find the section that starts with
`EDITOR'S NOTE — REPLACE BEFORE PUBLISHING`, and replace the draft text
below it with your final paper. Keep the `<h2 id="...">` headings so the
contents list keeps working.

> **Tip:** to preview locally, keep all the files together in one folder and
> double-click `index.html`. It looks plain **only** if you open a single file
> on its own, away from `styles.css` and `img/` — once it's a real website (or
> opened from the full folder) it looks exactly as designed.

---

## 2. Putting it online

You already own the design; you just need (a) a domain and (b) somewhere to host.

### Recommended: Cloudflare Pages + GitHub (free, and editable in your browser)
This is the best long-term setup: free, fast, secure, and you can edit the text
from any browser with the site updating itself.

1. Create a free account at **github.com** and make a new repository.
2. Upload these files to it (drag them into the repo in the browser).
3. Create a free account at **dash.cloudflare.com** → **Workers & Pages** →
   **Create** → **Pages** → **Connect to Git** → pick your repo → **Save and Deploy**.
   (No build settings needed — it's plain HTML.)
4. You get a live link immediately. To use your own domain, open the Pages
   project → **Custom domains** → add `www.erasmusplusforum.com` and follow the
   prompts.

**To edit later:** go to your repo on github.com, open the file, click the
pencil ✏️, change the text, click **Commit changes**. Your site updates in about
a minute. That's it — no software, no re-uploading.

### Fastest way to just see it live today: Netlify Drop
1. Go to **app.netlify.com/drop**.
2. Drag the whole website folder onto the page. It's live in seconds.
3. Add your domain under **Domain settings**.
   (Downside: to change something later you edit the files and drag the folder
   again. The Cloudflare + GitHub route above avoids that.)

### Buying the domain
Any registrar works. Simplest if you're using Cloudflare: buy it at
**Cloudflare Registrar** (sold at cost, includes free privacy) so everything
lives in one dashboard. **Porkbun** and **Namecheap** are also good and cheap.

---

## 3. "But I know WordPress — should I use that instead?"

You can, but two honest points:

- This site **won't drop into WordPress as-is** — you'd rebuild the design there
  using a theme or page builder. That's real work and the custom look needs
  recreating.
- For a small site you update once a year, the Cloudflare Pages + GitHub setup
  above gives you self-editing without any of WordPress's cost, updates, or
  security upkeep.

If, later on, you decide you really want a full visual dashboard, tell me and
I'll give you the exact colours, fonts and copy so rebuilding it in WordPress
(or a builder like Framer) is quick. For now, I'd keep it simple.
