import { __dirname } from "./helpers.js";
import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";

const compress = async () => {
  const pathRead = __dirname + "/files/fileToCompress.txt";
  const pathWrite = __dirname + "/files/archive.gz";
  const readStream = createReadStream(pathRead);
  const writeStream = createWriteStream(pathWrite);
  const compressStream = createGzip();

  readStream.pipe(compressStream).pipe(writeStream);
};

await compress();
