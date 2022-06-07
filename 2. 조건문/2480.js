// https://www.acmicpc.net/problem/2480

const fs = require('fs');
const input = fs.readFileSync('../ex.txt').toString().split(' ');
const nums = input.map(v => Number(v));
const a = nums[0];
const b = nums[1];
const c = nums[2];

if (a === b && b === c && a === c) {
  console.log(10000 + a * 1000);
} 
if (a !== b || a !== c || b !== c) {
  if (a === b || a === c) console.log(1000 + a * 100);
  if (b === c) console.log(1000 + b * 100);
}
if (a !== b && a !== c && b !== c) {
  const max = Math.max(a, b, c)
  console.log(max * 100);
}
