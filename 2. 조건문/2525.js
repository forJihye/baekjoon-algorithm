// https://www.acmicpc.net/problem/2525

const fs = require('fs');
const input = fs.readFileSync('../ex.txt').toString().split('\n');

let a = parseInt(input[0].split(' ')[0]);
let b = parseInt(input[0].split(' ')[1]);
let c = parseInt(input[1]);

const min = a * 60 + b + c;
let h = Math.floor(min / 60);
let m = min % 60;

if (h >= 24) h -= 24;
console.log(h, m);
