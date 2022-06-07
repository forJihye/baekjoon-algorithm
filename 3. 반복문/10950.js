// https://www.acmicpc.net/problem/10950
const fs = require('fs');
const input = fs.readFileSync('../ex.txt').toString().split('\n');

const length = Number(input[0]);
for (let i = 0; i < length; i++) {
  const [a, b] = input[i + 1].split(' ')
  console.log(Number(a) + Number(b))
}