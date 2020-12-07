const {timeoutPromise} = require('./utils');

async function run(){
// ---- synchronize operations by using promise and await
// ----  -> Done 1 2 3 Done run is printed 
 await timeoutPromise("1",3000);
 await timeoutPromise("2",2000);
 await timeoutPromise("3",1000);
 console.log('Done run');
}

run()
console.log('Done');