import { appendFile } from "fs/promises";
import { __dirname } from "./helpers.js";

const create = async () => {
  const path = __dirname + "/files/fresh.txt";
  const data = "I am fresh and young";
  try {
    await appendFile(path, data, {
      flag: "wx",
    });
  } catch (error) {
    throw Error("FS operation failed");
  }
};

await create();
