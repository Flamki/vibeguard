"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.printReport = printReport;
const chalk_1 = __importDefault(require("chalk"));
const path_1 = __importDefault(require("path"));
function printReport(results) {
    if (results.length === 0) {
        console.log(chalk_1.default.green("✅ No issues found. Ship it."));
        return;
    }
    const grouped = {};
    for (const r of results) {
        const file = path_1.default.basename(r.file || "unknown");
        grouped[file] ?? (grouped[file] = []);
        grouped[file].push(r);
    }
    console.log(chalk_1.default.bold("\n🛡️ VibeGuard Report\n"));
    for (const file in grouped) {
        console.log(chalk_1.default.cyan(file));
        for (const r of grouped[file]) {
            const lineInfo = r.line ? `Line ${r.line}` : "";
            console.log(`  ${chalk_1.default.yellow("⚠️")} ${lineInfo}  ${r.message}`);
        }
        console.log("");
    }
    console.log(chalk_1.default.bold(`Summary: ${results.length} warning(s)\n`));
}
