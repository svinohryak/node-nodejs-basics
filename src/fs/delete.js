import { rm } from "fs/promises";
import { __dirname } from "./helpers.js";

const remove = async () => {
  const path = __dirname + "/files/fileToRemove.txt";

  await rm(path).catch(() => {
    throw new Error("FS operation failed");
  });
};

await remove();
