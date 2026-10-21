// Rend les écrans Myéline en PNG haute définition.
// Usage : NODE_PATH=$(npm root -g) node render.cjs
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const root = __dirname;
const out = path.join(root, "exports");

const icons = Object.fromEntries(
  fs.readdirSync(path.join(root, "icons"))
    .filter(f => f.endsWith(".svg"))
    .map(f => [
      path.basename(f, ".svg"),
      fs.readFileSync(path.join(root, "icons", f), "utf8").replace(/<!--[\s\S]*?-->/g, "").trim(),
    ])
);

const screens = [
  { file: "myeline-accueil.png", page: "src/app.html?view=home&theme=light" },
  { file: "myeline-conversation.png", page: "src/app.html?view=chat&theme=light" },
  { file: "myeline-sombre.png", page: "src/app.html?view=home&theme=dark" },
  { file: "myeline-presentation.png", page: "src/presentation.html", width: 2400, height: 1500, scale: 1 },
];

(async () => {
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch();
  for (const s of screens) {
    const page = await browser.newPage({
      viewport: { width: s.width || 1440, height: s.height || 900 },
      deviceScaleFactor: s.scale || 2,
    });
    await page.goto("file://" + path.join(root, s.page));
    await page.evaluate(icons => {
      document.querySelectorAll("[data-i]").forEach(el => {
        const span = document.createElement("span");
        span.className = ("ic " + el.className).trim();
        span.innerHTML = icons[el.dataset.i] || "";
        el.replaceWith(span);
      });
    }, icons);
    await page.evaluate(() => document.fonts.ready);
    await page.waitForLoadState("networkidle");
    await page.screenshot({ path: path.join(out, s.file) });
    console.log("✓", s.file);
    await page.close();
  }
  await browser.close();
})();
