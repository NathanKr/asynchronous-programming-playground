const { timeoutPromise , array} = require("./utils");

// ---- synchronize operations by using promise and await 
// ---- -> Done loop Done 3 2 1 is printed
async function runForEachLoop() {
  array.forEach(async element => {
    const {msg,delay} = element;
        await timeoutPromise(msg,delay);
  });
  console.log('Done loop');
}


runForEachLoop();
console.log('Done');
