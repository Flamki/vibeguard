import { glob } from "glob";
import path from "path";

export async function walkFiles(rootPath: string): Promise<string[]> {
  const absoluteRoot = path.resolve(rootPath);

  const pattern = "**/*.{js,ts,jsx,tsx}";

  const files = await glob(pattern, {
    cwd: absoluteRoot,
    absolute: true,
    ignore: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.git/**",
      "**/src/**"
    ],
  });

  return files;
}
