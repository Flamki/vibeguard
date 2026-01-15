import { localStorageTokenRule } from "./localStorageToken";
import { missingTryCatchRule } from "./missingTryCatch";
import { hallucinatedApiRule } from "./hallucinatedApi";

export const rules = [
  localStorageTokenRule,
  missingTryCatchRule,
  hallucinatedApiRule,
];
