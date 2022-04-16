// 선택 정렬 (Selection Sort)
// 시간 복잡도는 N제곱, 배열이 10000개라면 1억번 반복
// 효율성이 떨어짐

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9, 11, 15, 13, 14, 12, 19, 18, 17, 15, 25];

function selectSort(data) {
    let min, index, temp;
    for (let i = 0; i < data.length; i++) {
        min = 9999;
        for (let j = i; j < data.length; j++) {
            if (min > data[j]) {
                min = data[j]
                index = j
            }
        }
        temp = data[i];
        data[i] = data[index];
        data[index] = temp
    }
    return data
}

console.time()
console.log(selectSort(arr))
console.timeEnd()