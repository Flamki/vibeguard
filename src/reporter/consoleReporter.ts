import chalk from "chalk";
import { ScanWarning } from "../types";
import path from "path";

export function printReport(results: ScanWarning[]) {
  if (results.length === 0) {
    console.log(chalk.green("✅ No issues found. Ship it."));
    return;
  }

  const grouped: Record<string, ScanWarning[]> = {};

  for (const r of results) {
    const file = path.basename(r.file || "unknown");
    grouped[file] ??= [];
    grouped[file].push(r);
  }

  console.log(chalk.bold("\n🛡️ VibeGuard Report\n"));

  for (const file in grouped) {
    console.log(chalk.cyan(file));

    for (const r of grouped[file]) {
      const lineInfo = r.line ? `Line ${r.line}` : "";
      console.log(
        `  ${chalk.yellow("⚠️")} ${lineInfo}  ${r.message}`
      );
    }

    console.log("");
  }

  console.log(
    chalk.bold(`Summary: ${results.length} warning(s)\n`)
  );
}
