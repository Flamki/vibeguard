import { ScanWarning } from "../types";

export function localStorageTokenRule(
  code: string,
  file: string
): ScanWarning[] {
  const warnings: ScanWarning[] = [];
  const regex = /localStorage\.setItem\(['"`].*token.*['"`]/gi;

  let match;
  while ((match = regex.exec(code))) {
    const line =
      code.slice(0, match.index).split("\n").length;

    warnings.push({
      ruleId: "local-storage-token",
      severity: "warning",
      message:
        "Token stored in localStorage. This is vulnerable to XSS. Use httpOnly cookies.",
      file,
      line,
    });
  }

  return warnings;
}
