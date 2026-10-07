// Checks a built VitePress site: internal links and local image/asset sources.
// Usage: node scripts/check-links.cjs [.vitepress/dist] [site-base]
// The site base ("/" locally, "/<repo>/" on GitHub Pages) is auto-detected from
// the built HTML unless passed as the second argument.
const fs = require("fs");
const path = require("path");

const base = process.argv[2] || ".vitepress/dist";
const prefixArg = process.argv[3];

const pages = [];
const walk = (d) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith(".html")) pages.push(p);
  }
};
walk(base);

const htmlOf = new Map(pages.map((f) => [f, fs.readFileSync(f, "utf8")]));

const isAsset = (v) => /\.(css|js|woff2?|png|jpe?g|webp|gif|svg|ico|map)$/i.test(v);
const value = (attr) => attr.replace(/^[a-z]+="/, "").replace(/"$/, "");

// Site base, taken from an asset URL in the built HTML (e.g. href="/assets/..." or
// href="/ahoge-docs/assets/...").
const prefix =
  prefixArg ||
  [...htmlOf.values()]
    .join("\n")
    .match(/(?:href|src)="(\/[^"']*)\/assets\/[^"]*"/)?.[1] ||
  "/";

const stripBase = (v) => (prefix === "/" ? v : v.slice(prefix.length));
const isLocal = (v) => !v.startsWith("//") && !/^[a-z]+:\/\//i.test(v) && (prefix === "/" ? v.startsWith("/") : v.startsWith(prefix + "/"));

const badLinks = [];
const badImages = [];
let links = 0;
let images = 0;

for (const f of pages) {
  const html = htmlOf.get(f);
  const where = path.relative(base, f);

  for (const attr of html.match(/href="[^"]*"/g) || []) {
    const href = value(attr);
    if (!isLocal(href)) continue;
    links++;
    if (isAsset(href)) continue;
    const rel = stripBase(href).split("#")[0].split("?")[0];
    if (!rel) continue; // site root
    const target = path.join(base, rel);
    if (fs.existsSync(target) || fs.existsSync(target + ".html") || fs.existsSync(path.join(target, "index.html"))) continue;
    badLinks.push(where + " -> " + href);
  }

  for (const attr of html.match(/src="[^"]*"/g) || []) {
    const src = value(attr);
    if (!isLocal(src)) continue;
    const rel = stripBase(src).split("?")[0];
    if (!rel || !isAsset(rel)) continue;
    images++;
    if (!fs.existsSync(path.join(base, rel))) badImages.push(where + " -> " + src);
  }
}

console.log("site base:", prefix);
console.log("pages checked:", pages.length);
console.log("internal links checked:", links);
console.log("broken internal links:", badLinks.length);
badLinks.forEach((b) => console.log("  " + b));
console.log("local assets checked:", images);
console.log("missing assets:", badImages.length);
badImages.forEach((b) => console.log("  " + b));
process.exit(badLinks.length || badImages.length ? 1 : 0);
