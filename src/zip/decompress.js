import { __dirname } from "./helpers.js";
import { createUnzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";

const decompress = async () => {
  const pathWrite = __dirname + "/files/fileToCompress.txt";
  const pathRead = __dirname + "/files/archive.gz";
  const readStream = createReadStream(pathRead);
  const writeStream = createWriteStream(pathWrite);
  const decompressStream = createUnzip();

  readStream.pipe(decompressStream).pipe(writeStream);
};

await decompress();
