const { timeoutPromise, array } = require("./utils");

// ---- some time you want all operations to be invoked in a parallel and just
// ---- wait for all to finish
// ---- here the order is not important as long as Done is last
// ----  -> 1 2 3 Done loop Done is printed

const arPromise = []

async function runForLoop() {
  for (let index = 0; index < array.length; index++) {
    const { msg, delay } = array[index];
    arPromise.push(timeoutPromise(msg, delay));
  }
  await Promise.all(arPromise);
  console.log("Done loop");
}

async function run() {
  await runForLoop();
  console.log("Done");
}

run();
