// 퀵 정렬 (Quick Sort)
// 대표적인 '분할 정복' 알고리즘으로 평균 속도가 N * logN이다.
// 특정한 값을 기준으로 큰 숫자와 작은 숫자를 서로 교환한 뒤 에 배열을 반으로 나눈다.
// 나누는 기준 값을 피벗(Pivot)이라고 한다.
// 보통 배열에서 가장 앞에 있는 값을 피벗으로 선정한다.
// 엇갈린 경우 기분값과 엇갈린 값을 교환환다.
// 깔끔한 코드를 위해 재귀함수를 사용하는 경우가 많음
// 이미 정렬이 되어 있는 경우 퀵 정렬의 시간복잡도가 N제곱까지 가기도 한다. 특정한 경우에는 비효율적이지만 대부분은 빠름

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

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
console.log(quickSort(arr, 0, arr.length - 1))
// [1, 10, 5, 8, 7, 6, 4, 3, 2, 9], key: 0, i: 1, j: 9
// 1 <= 9 true
// 10 <= 1 false
// 9 >= 1 && 9 > 0 true ----> j: 8
// 2 >= 1 && 8 > 0 true ----> j: 7
// 3 >= 1 && 7 > 0 true ----> j: 6
// 4 >= 1 && 6 > 0 true ----> j: 5
// 6 >= 1 && 5 > 0 true ----> j: 4
// 7 >= 1 && 4 > 0 true ----> j: 3
// 8 >= 1 && 3 > 0 true ----> j: 2
// 5 >= 1 && 2 > 0 true ----> j: 1
// 10 >= 1 && 1 > 0 true ----> j: 0
// 1 >= 1 && 0 > 0 false
// 1 > 0
// temp = data[0]
// data[0] = data[0]
// data[0] = temp
// 1 <= 0 false ----> while escape
// 함수 재호출 [1, 10, 5, 8, 7, 6, 4, 3, 2, 9], 0, -1  ----> stop
// 함수 재호출 [1, 10, 5, 8, 7, 6, 4, 3, 2, 9], 1, 9, key: 1, i: 2, j: 9
// 2 <= 9 true
// 5 <= 10 ----> i: 3
// 8 <= 10 ----> i: 4
// 7 <= 10 ----> i: 5
// 6 <= 10 ----> i: 6
// 4 <= 10 ----> i: 7
// 3 <= 10 ----> i: 8
// 2 <= 10 ----> i: 9
// 9 <= 10 ----> i: 10
// undefined <= 10 false
// 9 >= 10 && 9 > 1 false
// 10 > 9 true
// temp = data[9]
// data[9] = data[1]
// data[1] = temp
// 함수 재호출 [1, 9, 5, 8, 7, 6, 4, 3, 2, 10], 1, 8
// 1 >= 8 false
// key: 1, i: 2, j: 8
// 2 <= 8 true

// 함수 재호출 [1, 9, 5, 8, 7, 6, 4, 3, 2, 10], 10, 9  ----> stop

console.timeEnd()