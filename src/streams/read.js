import { createReadStream } from "fs";
import { __dirname } from "./helpers.js";

const read = async () => {
  const path = __dirname + "/files/fileToRead.txt";
  const readStream = createReadStream(path);
  readStream.pipe(process.stdout);
};

await read();
