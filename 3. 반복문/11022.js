// https://www.acmicpc.net/problem/11022
const fs = require('fs');
const input = fs.readFileSync('../ex.txt').toString().split('\n');

const length = Number(input[0]);
let result = '';
for (let i = 1; i <= length; i++) {
  const [a, b] = input[i].split(' ').map(v => Number(v))
  result += `Case #${i}: ${a} + ${b} = ${a + b}\n`;
}
console.log(result.trim());