/*
[문제]
배열을 정렬하는 것은 쉽다. 수가 주어지면, 그 수의 각 자리수를 내림차순으로 정렬해보자.

[입력]
첫째 줄에 정렬하려고 하는 수 N이 주어진다. N은 1,000,000,000보다 작거나 같은 자연수이다.

[출력]
첫째 줄에 자리수를 내림차순으로 정렬한 수를 출력한다

[예상결과]
4321
*/

// 제출용
// const readFileSyncAddr = '/dev/stdin'

// 테스트용
const path = require("path")
const fileName = path.basename(__filename)
const fileCode = fileName.split("_")[0]
const readFileSyncAddr = `./${fileCode}_index.txt`

const input = require("fs").readFileSync(readFileSyncAddr).toString().trim()
// const arr = input.split("\n").map((v) => Number(v))
// const N = Number(arr.shift())
const arr = (input + "").split("").map((v) => Number(v))
// console.log(arr)

function bubbleSort(data) {
  let temp
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - (1 + i); j++) {
      if (data[j] < data[j + 1]) {
        temp = data[j]
        data[j] = data[j + 1]
        data[j + 1] = temp
      }
    }
  }
  return data
}

bubbleSort(arr)
console.log(arr.join(""))
