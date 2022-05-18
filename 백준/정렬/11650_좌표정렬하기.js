/*
[문제]
배열을 정렬하는 것은 쉽다. 수가 주어지면, 그 수의 각 자리수를 내림차순으로 정렬해보자.

[입력]
2차원 평면 위의 점 N개가 주어진다. 좌표를 x좌표가 증가하는 순으로, x좌표가 같으면 y좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.

[출력]
첫째 줄에 점의 개수 N (1 ≤ N ≤ 100,000)이 주어진다. 둘째 줄부터 N개의 줄에는 i번점의 위치 xi와 yi가 주어진다. 
(-100,000 ≤ xi, yi ≤ 100,000) 좌표는 항상 정수이고, 위치가 같은 두 점은 없다.

[예상결과]
1 -1
1 1
2 2
3 3
3 4
*/

// 제출용
// const readFileSyncAddr = '/dev/stdin'

// 테스트용
const path = require("path")
const fileName = path.basename(__filename)
const fileCode = fileName.split("_")[0]
const readFileSyncAddr = `./${fileCode}_index.txt`

const input = require("fs").readFileSync(readFileSyncAddr).toString().trim()
const arr = input.split("\n").map((item) => item.split(" ").map((v) => +v))
const N = Number(arr.shift())

function bubbleSort(data) {
  let temp
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - (1 + i); j++) {
      if (data[j][0] > data[j + 1][0]) {
        temp = data[j]
        data[j] = data[j + 1]
        data[j + 1] = temp
      } else if (data[j][0] === data[j + 1][0]) {
        if (data[j][1] > data[j + 1][1]) {
          temp = data[j]
          data[j] = data[j + 1]
          data[j + 1] = temp
        }
      }
    }
  }
  return data
}

bubbleSort(arr)
const result = arr.map((item) => item.join(" ")).join("\n")
console.log(result)
