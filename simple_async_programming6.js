const { timeoutPromise, array } = require("./utils");

// ---- synchronize operations by using promise and await
// ----  -> 1 2 3 Done loop Done is printed

async function runForLoop() {
  for (let index = 0; index < array.length; index++) {
    const { msg, delay } = array[index];
    await timeoutPromise(msg, delay);
  }
  console.log("Done loop");
}

async function run() {
  await runForLoop();
  console.log("Done");
}

run();
