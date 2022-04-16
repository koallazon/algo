// const input = 216;
const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const num = parseInt(input, 10)
const constuctorArr = [];

const getSum = (n) => {
    return n + Array.from(n.toString()).reduce((acc, cur) => (acc += parseInt(cur)), 0);
}

for (let i = 1; i <= num; i++) {
    if (getSum(i) === num) {
        constuctorArr.push(i);
    }
}

if (constuctorArr.length) {
    console.log(Math.min.apply(null, constuctorArr));
} else {
    console.log(0);
}
