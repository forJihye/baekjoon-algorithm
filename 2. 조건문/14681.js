// const fs = require('fs');
// const input = fs.readFileSync('../ex.txt').toString().split('\n');
// const a = Number(input[0]);
// const b = Number(input[1]);
// const x = 0;
// const y = 0;

// if (a >= x && b >= y) {
//   console.log(1);
// } else if (a < x && b >= y) {
//   console.log(2);
// } else if (a < x && b < y) {
//   console.log(3);
// } else if (a >= x && b < y) {
//   console.log(4);
// }

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
});
rl.on('close', function () {
  const a = Number(input[0]);
  const b = Number(input[1]);
  const x = 0;
  const y = 0;
  
  if (a >= x && b >= y) {
    console.log(1);
  } else if (a < x && b >= y) {
    console.log(2);
  } else if (a < x && b < y) {
    console.log(3);
  } else if (a >= x && b < y) {
    console.log(4);
  }
  process.exit();
});
