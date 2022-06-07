// https://www.acmicpc.net/problem/2438
// 중첩 반복문

const fs = require('fs');
const input = Number(fs.readFileSync('../ex.txt'));

let result = '';
for (let i = 0; i < input; i++) {
  for (let j = 0; j <= i; j++) {
    result += '*';
  }
  result += '\n';
}
console.log(result.trim())