const {timeoutPromise} = require('./utils');


// ---- try to synchronize operations by using promise is not enough 
// ---- -> Done 3 2 1 is printed
 timeoutPromise("1",3000);
 timeoutPromise("2",2000);
 timeoutPromise("3",1000);
 console.log('Done');