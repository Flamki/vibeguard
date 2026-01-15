#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const chalk_1 = __importDefault(require("chalk"));
const scanner_1 = require("./scanner");
const consoleReporter_1 = require("./reporter/consoleReporter");
const program = new commander_1.Command();
console.log(chalk_1.default.cyan.bold(`
🛡️  VibeGuard
-----------------------
AI code safety net
`));
program
    .name("vibeguard")
    .description("Scan codebases for common AI-generated mistakes")
    .version("0.1.0");
program
    .command("scan")
    .argument("<path>", "Path to project")
    .action(async (path) => {
    try {
        const results = await (0, scanner_1.runScan)(path);
        (0, consoleReporter_1.printReport)(results);
    }
    catch (err) {
        console.error(chalk_1.default.red("❌ Scan failed"), err);
        process.exit(1);
    }
});
program.parse(process.argv);
