#!/usr/bin/env node

import { Command } from "commander";
import chalk from "chalk";
import { runScan } from "./scanner";
import { printReport } from "./reporter/consoleReporter";

const program = new Command();

console.log(
  chalk.cyan.bold(`
🛡️  VibeGuard
-----------------------
AI code safety net
`)
);

program
  .name("vibeguard")
  .description("Scan codebases for common AI-generated mistakes")
  .version("0.1.0");

program
  .command("scan")
  .argument("<path>", "Path to project")
  .action(async (path: string) => {
    try {
      const results = await runScan(path);
      printReport(results);
    } catch (err) {
      console.error(chalk.red("❌ Scan failed"), err);
      process.exit(1);
    }
  });

program.parse(process.argv);
