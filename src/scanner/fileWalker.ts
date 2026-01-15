import fs from "fs";
import path from "path";

const ALLOWED_EXTENSIONS = [".ts", ".js"];

const IGNORED_DIRS = new Set([
  "node_modules",
  "dist",
  ".git",
  ".github",
  "build",
  "out",
]);

export async function walkFiles(rootPath: string): Promise<string[]> {
  const results: string[] = [];
  const absoluteRoot = path.resolve(rootPath);

  function walk(dir: string) {
    if (!fs.existsSync(dir)) return;

    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        if (!IGNORED_DIRS.has(entry.name)) {
          walk(fullPath); // 🔥 recursion
        }
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (ALLOWED_EXTENSIONS.includes(ext)) {
          results.push(fullPath);
        }
      }
    }
  }

  walk(absoluteRoot);
  return results;
}
