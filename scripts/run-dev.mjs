import { existsSync } from "node:fs";
import { spawn } from "node:child_process";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const serverEntry = resolve(".output/server/index.mjs");
const isProductionRuntime =
  process.env.NODE_ENV === "production" ||
  process.env.NITRO_HOST !== undefined ||
  (process.cwd() === "/app" && existsSync(serverEntry));

if (isProductionRuntime) {
  if (!existsSync(serverEntry)) {
    console.error("Production build not found. Run `npm run build` before starting the app.");
    process.exit(1);
  }

  await import(pathToFileURL(serverEntry).href);
} else {
  const viteBin = resolve(
    "node_modules",
    ".bin",
    process.platform === "win32" ? "vite.cmd" : "vite",
  );
  const child = spawn(viteBin, ["dev"], {
    stdio: "inherit",
    shell: process.platform === "win32",
  });

  for (const signal of ["SIGINT", "SIGTERM"]) {
    process.on(signal, () => child.kill(signal));
  }

  child.on("exit", (code, signal) => {
    if (signal) process.kill(process.pid, signal);
    process.exit(code ?? 0);
  });
}
