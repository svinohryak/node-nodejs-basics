import { createWriteStream } from "fs";
import { __dirname } from "./helpers.js";

const write = async () => {
  const path = __dirname + "/files/fileToWrite.txt";
  const writeStream = createWriteStream(path);

  console.log("Type in something:");

  process.stdin.on("data", (data) => {
    writeStream.write(data.toString());
    process.exit();
  });
};

await write();
