import { walkFiles } from "./fileWalker";
import { scanFile } from "./scanFile";
import { ScanWarning } from "../types";

export async function runScan(rootPath: string): Promise<ScanWarning[]> {
  const files = await walkFiles(rootPath);
  const results: ScanWarning[] = [];

  for (const file of files) {
    const warnings = await scanFile(file);
    results.push(...warnings);
  }

  return results;
}
