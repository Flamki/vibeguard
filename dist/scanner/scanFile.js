"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scanFile = scanFile;
const fs_1 = __importDefault(require("fs"));
const rules_1 = require("../rules");
async function scanFile(filePath) {
    const code = fs_1.default.readFileSync(filePath, "utf-8");
    const warnings = [];
    for (const rule of rules_1.rules) {
        const result = rule(code, filePath);
        warnings.push(...result);
    }
    return warnings;
}
