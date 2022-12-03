import { readFile } from "fs/promises";
import { __dirname } from "./helpers.js";

const read = async () => {
  const path = __dirname + "/files/fileToRead.txt";
  try {
    const contents = await readFile(path, { encoding: "utf8" });
    console.log(contents);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();
