import * as fs from "fs/promises";
import { __dirname } from "./helpers.js";

const rename = async () => {
  const oldPath = __dirname + "/files/wrongFilename.txt";
  const newPath = __dirname + "/files/properFilename.md";
  try {
    await fs.rename(oldPath, newPath);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await rename();
