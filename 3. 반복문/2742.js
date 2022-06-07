// https://www.acmicpc.net/problem/2742

const fs = require('fs')
const input = Number(fs.readFileSync('../ex.txt'));

let result = '';
for (let i = input; i >= 1; i--) {
  result += `${i}\n`
}
console.log(result.trim())