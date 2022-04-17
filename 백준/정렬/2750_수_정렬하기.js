/*
[문제]
N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

[입력]
첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수 주어진다. 이 수는 절댓값이 1,000보다 작거나 같은 정수이다. 수는 중복되지 않는다.

[출력]
첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.

[예상결과]
1666
*/

// 제출용
// const readFileSyncAddr = '/dev/stdin'

// 테스트용
const readFileSyncAddr = './2750_index.txt'
const input = require('fs').readFileSync(readFileSyncAddr).toString().trim();
[N, ...arr] = input.split('\n')

function insertSort(data) {
    let j, temp;
    for (let i = 0; i < data.length - 1; i++) {
        j = i;
        while(data[j] > data[j + 1]) {
            temp = data[j];
            data[j] = data[j + 1];
            data[j + 1] = temp;
            j--;
        }
    }
    return data
}

console.time()
const sorted = insertSort(arr);
for (let i = 0; i < N; i++) {
    console.log(sorted[i])
}
console.timeEnd()


