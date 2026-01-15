"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.missingTryCatchRule = missingTryCatchRule;
function missingTryCatchRule(code, file) {
    if (code.includes("await") && !code.includes("try {")) {
        const line = code
            .split("\n")
            .findIndex((l) => l.includes("await")) + 1;
        return [
            {
                ruleId: "missing-try-catch",
                severity: "warning",
                message: "Async operation without try/catch. This may crash in production.",
                file,
                line,
            },
        ];
    }
    return [];
}
