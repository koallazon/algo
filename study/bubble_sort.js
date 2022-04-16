// 버블 정렬 (Bubble Sort)
// 옆에 있는 값과 비교하여 더 작은 값을 반복적으로 앞으로 보내는 정렬 방법
// 시간 복잡도는 N제곱, 모든 정렬 중에서 가장 효율성이 떨어짐
// N * (N + 1) / 2
// 자리를 바꾸는 연산에 선택정렬보다 시간이 많이 소요된다.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9, 11, 15, 13, 14, 12, 19, 18, 17, 15, 25];

function bubbleSort(data) {
    let temp;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length - (1 + i); j++) {
            if (data[j] > data[j+1]) {
                temp = data[j]
                data[j] = data[j + 1]
                data[j + 1] = temp
            }
        }
    }
    return data
}

console.time()
console.log(bubbleSort(arr))
console.timeEnd()