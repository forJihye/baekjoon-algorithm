// https://www.acmicpc.net/problem/2884

const fs = require('fs');
const input = fs.readFileSync('../ex.txt').toString().split(' ');
const a = Number(input[0]);
const b = Number(input[1]);
let h = a;
let m = b;

m -= 45;
if (m < 0) {
  m+=60;
  h--;
  if (h < 0) {
    h = 23;
  }
} 
console.log(h, m);