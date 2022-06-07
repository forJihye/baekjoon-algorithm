// https://www.acmicpc.net/problem/8393
const fs = require('fs');
const input = Number(fs.readFileSync('../ex.txt'));

let result = 0;
for (let i = 1; i <= input; i++) {
  result += i;
}
console.log(result)