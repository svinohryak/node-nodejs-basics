import { readFile } from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { createHash } from "node:crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
  const path = __dirname + "/files/fileToCalculateHashFor.txt";
  const content = await readFile(path, "utf-8");
  const calculatedHash = createHash("sha256").update(content).digest("hex");
  console.log(calculatedHash);
};

await calculateHash();
