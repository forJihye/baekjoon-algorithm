// https://www.acmicpc.net/problem/2525

const fs = require('fs');
const input = fs.readFileSync('../ex.txt').toString().split('\n');

const a = Number(input[0].split(' ')[0]);
const b = Number(input[0].split(' ')[1]);
const c = Number(input[1]);

// 현재 시간 + 종료 시간 = 현재 시간 부터 종료시간 까지 걸리는 총 시간 (분)
const time = a * 60 + b + c;

// 시: 총 분에서 60분(1시간) 몫
let h = Math.floor(time / 60);
if (h >= 24) h -= 24;
// 분: 총 분에서 60분(1시간) 나머지
let m = time % 60;
console.log(h, m);