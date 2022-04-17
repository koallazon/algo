// const input = `5
// 55 185
// 58 183
// 88 186
// 60 175
// 46 155`
// const [n, ...arr] = input.split('\n')
const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(n, 10)
const data = arr.map((v, idx) => {
    const [weight, height] = v.split(/\s/).map(v => +v)
    return {
        weight,
        height,
        idx: idx + 1
    }
}) 
const rank = [];

for (let i = 0; i < N; i++) {
    let counter = 0;
    for (let j = 0; j < N; j++) {
        if (i !== j) {
            if (data[i].weight < data[j].weight && data[i].height < data[j].height) {
                counter++;
            }
        }
    }
    rank.push(counter + 1);
}
console.log(rank.join(' '));