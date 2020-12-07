const { timeoutPromise , array} = require("./utils");



// ---- synchronize operations by using promise and await
// ----  -> Done 1 2 3 Done loop is printed

async function runForLoop() {
    for (let index = 0; index < array.length; index++) {
        const {msg,delay} = array[index];
        await timeoutPromise(msg,delay);
    }
    console.log('Done loop');
}


runForLoop();
console.log('Done');
