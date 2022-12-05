import { Worker } from "worker_threads";
import { cpus } from "os";
import { fileURLToPath } from "url";
import { dirname } from "path";

const performCalculations = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const cp = cpus();
  let basicNumber = 10;

  const resultPromise = await Promise.allSettled(
    cp.map(() => {
      return new Promise((res, rej) => {
        const worker = new Worker(__dirname + "/worker.js", {
          workerData: basicNumber,
        });
        basicNumber++;
        worker.on("message", (msg) => {
          res(msg);
        });
        worker.on("error", (msg) => {
          rej(msg);
        });
      });
    })
  );

  const result = resultPromise.map((promise) => {
    const status = promise.status === "fulfilled" ? "resolved" : "error";
    const value = promise.value || null;
    return {
      status: status,
      value: value,
    };
  });

  console.log(result);
};

await performCalculations();
