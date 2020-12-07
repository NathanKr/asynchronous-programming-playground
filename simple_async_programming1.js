const {timeout} = require('./utils');

// ---- simple async programming 
// ---- -> Done 3 2 1 is printed
timeout("1",3000);
timeout("2",2000);
timeout("3",1000);
console.log('Done');