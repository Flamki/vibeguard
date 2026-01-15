"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rules = void 0;
const localStorageToken_1 = require("./localStorageToken");
const missingTryCatch_1 = require("./missingTryCatch");
const hallucinatedApi_1 = require("./hallucinatedApi");
exports.rules = [
    localStorageToken_1.localStorageTokenRule,
    missingTryCatch_1.missingTryCatchRule,
    hallucinatedApi_1.hallucinatedApiRule,
];
