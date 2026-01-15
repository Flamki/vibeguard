"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.walkFiles = walkFiles;
const glob_1 = require("glob");
const path_1 = __importDefault(require("path"));
async function walkFiles(rootPath) {
    const absoluteRoot = path_1.default.resolve(rootPath);
    const pattern = "**/*.{js,ts,jsx,tsx}";
    const files = await (0, glob_1.glob)(pattern, {
        cwd: absoluteRoot,
        absolute: true,
        ignore: [
            "**/node_modules/**",
            "**/dist/**",
            "**/.git/**",
            "**/src/**"
        ],
    });
    return files;
}
