// 삽입 정렬 (Insertion Sort)
// 각 숫자를 적절한 위치에 삽입하는 방법
// 시간 복잡도는 N제곱, 시간복잡도가 선택, 버블, 삽입 중에 가장 효율적임 

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9, 11, 15, 13, 14, 12, 19, 18, 17, 15, 25];

function InsertionSort(data) {
    let j, temp;
    for (let i = 0; i < data.length - 1; i++) {
        j = i;
        while(data[j] > data[j + 1]) {
            temp = data[j]
            data[j] = data[j + 1]
            data[j + 1] = temp;
            j--;
        }
    }
    return data
}

console.time()
console.log(InsertionSort(arr))
console.timeEnd()