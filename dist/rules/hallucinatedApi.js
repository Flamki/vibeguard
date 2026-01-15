"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hallucinatedApiRule = hallucinatedApiRule;
/**
 * Globals and well-known functions we NEVER want to flag
 */
const ALLOWED_GLOBALS = new Set([
    "fetch",
    "console",
    "setTimeout",
    "setInterval",
    "clearTimeout",
    "clearInterval",
    "require",
    "import",
]);
function hallucinatedApiRule(code, file) {
    const warnings = [];
    /**
     * Matches function calls NOT preceded by a dot
     * Example matched:   getUserByIdSafe(
     * Example ignored:   obj.method(
     */
    const callRegex = /(?<!\.)\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g;
    /**
     * Matches function declarations, variables, and imports
     */
    const declaredRegex = /(function\s+([a-zA-Z_][a-zA-Z0-9_]*))|(const\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=)|(let\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=)|(var\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=)|import\s+.*\b([a-zA-Z_][a-zA-Z0-9_]*)\b/g;
    const calls = new Set();
    const declared = new Set();
    let match;
    // Collect all function calls
    while ((match = callRegex.exec(code))) {
        const fn = match[1];
        // Skip globals, constructors, and obvious safe cases
        if (ALLOWED_GLOBALS.has(fn) ||
            fn[0] === fn[0].toUpperCase()) {
            continue;
        }
        calls.add(fn);
    }
    // Collect declared functions / variables / imports
    while ((match = declaredRegex.exec(code))) {
        const name = match[2] ||
            match[4] ||
            match[6] ||
            match[8] ||
            match[9];
        if (name) {
            declared.add(name);
        }
    }
    // Diff: calls that were never declared
    for (const fn of calls) {
        if (!declared.has(fn)) {
            const line = code
                .split("\n")
                .findIndex((l) => l.includes(`${fn}(`)) + 1;
            warnings.push({
                ruleId: "hallucinated-api",
                severity: "warning",
                message: `Possible hallucinated API: ${fn}() is used but never defined or imported.`,
                file,
                line: line > 0 ? line : undefined,
            });
        }
    }
    return warnings;
}
