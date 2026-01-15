import fs from "fs";
import { ScanWarning } from "../types";
import { rules } from "../rules";

export async function scanFile(filePath: string): Promise<ScanWarning[]> {
  const code = fs.readFileSync(filePath, "utf-8");
  const warnings: ScanWarning[] = [];

  for (const rule of rules) {
    const result = rule(code, filePath);
    warnings.push(...result);
  }

  return warnings;
}
