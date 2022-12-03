import { readdir } from "fs/promises";
import { __dirname } from "./helpers.js";

const list = async () => {
  const path = __dirname + "/files";
  try {
    const files = await readdir(path, { encoding: "utf8" });
    console.log(files);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
