import { Transform } from "stream";

const transform = async () => {
  const reverseString = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split("").reverse().join(""));
    },
  });

  console.log("Give me your string:");

  process.stdin.pipe(reverseString).pipe(process.stdout);
};

await transform();
