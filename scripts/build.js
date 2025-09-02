import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const src = path.join(__dirname, "..", "public");
const dest = path.join(__dirname, "..", "dist");

(async () => {
  await fs.remove(dest);
  await fs.copy(src, dest);
  console.log("Build complete → dist/");
})();

