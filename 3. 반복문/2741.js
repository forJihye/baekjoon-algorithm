// https://www.acmicpc.net/problem/2741

const fs = require('fs')
const input = Number(fs.readFileSync('../ex.txt'));

let result = '';
for (let i = 1; i <= input; i++) {
  result += `${i}\n`
}
console.log(result.trim())