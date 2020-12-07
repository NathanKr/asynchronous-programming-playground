const axios = require("axios");

function timeout(msg, delayMs) {
  setTimeout(() => console.log(msg), delayMs);
}

function timeoutPromise(msg, delayMs) {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      console.log(`msg : ${msg} , delayMs : ${delayMs}`);
      resolve();
    }, delayMs);
  });

  return promise;
}

function Params(msg, delay) {
    this.msg = msg;
    this.delay = delay;
  }
  
  const array = [
    new Params("1", 3000),
    new Params("2", 2000),
    new Params("3", 1000),
  ];

module.exports = { timeout, timeoutPromise , array};
