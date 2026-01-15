console.log("FILE WALKER RUNNING");

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

/**
 * Recursively finds all .ts and .js files in a directory and its subdirectories.
 */
export async function walkFiles(rootPath: string): Promise<string[]> {
  const results: string[] = [];

  // Always work with absolute paths
  const absoluteRoot = path.resolve(rootPath);

  function walk(currentDir: string) {
    if (!fs.existsSync(currentDir)) return;

    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(currentDir, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);

      if (entry.isDirectory()) {
        if (!IGNORED_DIRS.has(entry.name)) {
          // 🔁 recursion — this is what scans subfolders
          walk(fullPath);
        }
        continue;
      }

      if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (ALLOWED_EXTENSIONS.includes(ext)) {
          results.push(fullPath);
        }
      }
    }
  }

  walk(absoluteRoot);

  console.log("FILES FOUND:", results.length);
  return results;
}
