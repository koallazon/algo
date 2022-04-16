// let input = `5 21
// 5 6 7 8 9`
// input = input.toString().trim().split('\n')
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const fisrt = input[0].split(/\s/).map(v => parseInt(v));
const arr = input[1].split(/\s/).map(v => parseInt(v));
const N = fisrt[0];
const M = fisrt[1];
let sum;
let max = 0;
for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
        for (let k = j + 1; k < N; k++) {
            sum = arr[i] + arr[j] + arr[k];
            if (sum > max && sum <= M) {
                max = sum;
            }
        }
    }
}
console.log(max);