"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.walkFiles = walkFiles;
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
async function walkFiles(rootPath) {
    const results = [];
    const absoluteRoot = path_1.default.resolve(rootPath);
    function walk(dir) {
        if (!fs_1.default.existsSync(dir))
            return;
        const entries = fs_1.default.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path_1.default.join(dir, entry.name);
            if (entry.isDirectory()) {
                if (!IGNORED_DIRS.has(entry.name)) {
                    walk(fullPath); // 🔥 recursion
                }
            }
            else if (entry.isFile()) {
                const ext = path_1.default.extname(entry.name).toLowerCase();
                if (ALLOWED_EXTENSIONS.includes(ext)) {
                    results.push(fullPath);
                }
            }
        }
    }
    walk(absoluteRoot);
    return results;
}
