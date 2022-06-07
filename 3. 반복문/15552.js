// https://www.acmicpc.net/problem/15552
const fs = require('fs')
const input = fs.readFileSync('../ex.txt').toString().split('\n');

const length = Number(input[0]);
let answer = '';
for (let i = 1; i <= length; i++) {
  const [a, b] = input[i].split(' ').map(v => Number(v))
  answer += `${a + b}\n`;
}
console.log(answer.trim());