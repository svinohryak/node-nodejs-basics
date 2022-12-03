import { cp } from "fs/promises";
import { __dirname } from "./helpers.js";

const copy = async () => {
  const src = __dirname + "/files";
  const dest = __dirname + "/files_copy";

  try {
    await cp(src, dest, {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

copy();
