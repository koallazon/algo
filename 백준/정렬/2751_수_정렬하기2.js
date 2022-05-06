/*
[문제]
N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

[입력]
첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수가 주어진다. 이 수는 절댓값이 1,000,000보다 작거나 같은 정수이다. 수는 중복되지 않는다.

[출력]
첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.
*/

// 제출용
// const readFileSyncAddr = '/dev/stdin'

// 테스트용
const readFileSyncAddr = './2751_index.txt'
const input = require('fs').readFileSync(readFileSyncAddr).toString().trim();
[N, ...arr] = input.split('\n')
// const sorted = arr.sort((a, b) => a - b)
function quickSort(data, start, end) {
    if (start >=  end) return; // 원소가 1개인 경우

    let key = start; // 키는 첫번째 원소
    let i = start + 1; //기본적으로 키값의 우측부터
    let j = end;
    let temp;

    while(i <= j) { // 엇갈릴 때까지 반복
        // 내림차순으로 하려면 아래 두 while문의 등호를 반대로 변경한다.
        while(data[i] <= data[key]) { // 키 값보다 큰 값을 만날 때까지
            i++;
        }
        while(data[j] >= data[key] && j > start) { // 키 값보다 작은 값을 만날 때까지
            j--;
        }
        if (i > j) { // 현재 엇갈린 상태면 키 값과 교체
            temp = data[j];
            data[j] = data[key];
            data[key] = temp;
        } else {
            temp = data[j];
            data[j] = data[i];
            data[i] = temp;
        }
    }

    quickSort(data, start, j - 1);
    quickSort(data, j + 1, end);
    return data
}

console.time()
const sorted = quickSort(arr, 0, arr.length - 1)
for (let i = 0; i < N; i++) {
    console.log(sorted[i])
}
console.timeEnd()


