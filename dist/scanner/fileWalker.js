"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.walkFiles = walkFiles;
console.log("FILE WALKER RUNNING");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
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
async function walkFiles(rootPath) {
    const results = [];
    // Always work with absolute paths
    const absoluteRoot = path_1.default.resolve(rootPath);
    function walk(currentDir) {
        if (!fs_1.default.existsSync(currentDir))
            return;
        let entries;
        try {
            entries = fs_1.default.readdirSync(currentDir, { withFileTypes: true });
        }
        catch {
            return;
        }
        for (const entry of entries) {
            const fullPath = path_1.default.join(currentDir, entry.name);
            if (entry.isDirectory()) {
                if (!IGNORED_DIRS.has(entry.name)) {
                    // 🔁 recursion — this is what scans subfolders
                    walk(fullPath);
                }
                continue;
            }
            if (entry.isFile()) {
                const ext = path_1.default.extname(entry.name).toLowerCase();
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
