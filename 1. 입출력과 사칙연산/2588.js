const fs = require('fs');
const input = fs.readFileSync('../ex.txt').toString().split('\n');
const a = Number(input[0]);
const b = Number(input[1]);

const one = b % 10;
const two = Math.floor((b % 100) / 10);
const three = Math.floor(b / 100);

console.log(a * one);
console.log(a * two);
console.log(a * three);
console.log(a * b);
