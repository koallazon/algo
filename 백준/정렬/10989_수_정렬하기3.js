/*
[문제]
N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

[입력]
첫째 줄에 수의 개수 N(1 ≤ N ≤ 10,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수가 주어진다. 이 수는 10,000보다 작거나 같은 자연수이다.

[출력]
첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.

계수정렬: Counting Sort는 정렬 알고리즘으로 의 시간복잡도를 갖습니다.
*/

// 제출용
// const readFileSyncAddr = '/dev/stdin'

// 테스트용
const readFileSyncAddr = './10989_index.txt'
const input = require('fs').readFileSync(readFileSyncAddr).toString().trim();
[N, ...arr] = input.split('\n')
const max = Math.max.apply(null, arr);
const arrange = new Array(max);
arrange.fill(0)
let answer = '';

for (let i = 0; i < N; i++) {
  arrange[arr[i] - 1]++;
}

for(let i = 0; i < arrange.length; i++) {
    if(arrange[i] !== 0) {
        for(let j=0; j < arrange[i]; j++) {
            answer += (i+1) + '\n';
        }
    }
}

console.log(answer)
// for(let i = 0; anwser)