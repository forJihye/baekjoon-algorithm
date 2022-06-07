// https://www.acmicpc.net/problem/2439
// 중첩 반복문

const fs = require('fs');
const input = Number(fs.readFileSync('../ex.txt'));

for(let i = 0; i < input; i++){ // 0 1 2 3 4
  let blanks = '';
  let stars = '';
  for(let j = input; j > i + 1; j--){
    blanks += ' ';
  }
  for(let k = 0; k <= i; k++){ // 0 1 2 3 4 
    stars += '*';
  }
  console.log(blanks + stars);
}
