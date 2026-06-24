import { copyFile, readdir, stat } from "node:fs/promises";
import { join } from "node:path";

// Pyreon SSG emits directory-format only (`dist/<route>/index.html`).
// GitHub Pages issues a 301 to the trailing-slash form for slash-less
// hits, costing ~870ms on mobile (PSI "Avoid multiple page redirects"
// audit, score 0). Emit a sibling `dist/<route>.html` so GH Pages
// serves either URL directly with no redirect. Track upstream issue
// to ship `ssg: { format: 'file' | 'directory' | 'both' }` natively.

async function walk(dir: string): Promise<void> {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const sub = join(dir, entry.name);
    const indexHtml = join(sub, "index.html");
    try {
      await stat(indexHtml);
      await copyFile(indexHtml, `${sub}.html`);
    } catch {
      // No index.html in this dir — skip.
    }
    await walk(sub);
  }
}

await walk("dist");
