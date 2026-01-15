"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runScan = runScan;
const fileWalker_1 = require("./fileWalker");
const scanFile_1 = require("./scanFile");
async function runScan(rootPath) {
    const files = await (0, fileWalker_1.walkFiles)(rootPath);
    const results = [];
    for (const file of files) {
        const warnings = await (0, scanFile_1.scanFile)(file);
        results.push(...warnings);
    }
    return results;
}
