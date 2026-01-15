"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localStorageTokenRule = localStorageTokenRule;
function localStorageTokenRule(code, file) {
    const warnings = [];
    const regex = /localStorage\.setItem\(['"`].*token.*['"`]/gi;
    let match;
    while ((match = regex.exec(code))) {
        const line = code.slice(0, match.index).split("\n").length;
        warnings.push({
            ruleId: "local-storage-token",
            severity: "warning",
            message: "Token stored in localStorage. This is vulnerable to XSS. Use httpOnly cookies.",
            file,
            line,
        });
    }
    return warnings;
}
