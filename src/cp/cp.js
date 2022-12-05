import { fork } from "child_process";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
  const f = fork(__dirname + "/files/script.js", args);

  process.stdin.on("data", (data) => {
    f.send(data);
  });

  f.on("message", (args) => {
    console.log(args);
  });
};

spawnChildProcess();
