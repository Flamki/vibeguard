export interface ScanWarning {
  ruleId: string;
  severity: "warning" | "error";
  message: string;
  line?: number;
  file?: string;
}
