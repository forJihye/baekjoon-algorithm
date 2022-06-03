const fs = require('fs');
const input = fs.readFileSync('../ex.txt').toString().trim();
console.log(Number(input) - 543);