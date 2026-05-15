// Predict the output before running.
// Code:

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

// Expected output (write it down, then run to verify):
// 1) A
// 2) D
// 3) C
// 4) B

