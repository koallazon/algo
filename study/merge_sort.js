// 병합 정렬 (Merge Sort)
// 하나의 큰 문제를 두 개의 작은 문제로 분할한 뒤에 각자 계산하고 나중에 합치는 방법을 채택합니다.
// 즉, 기본 아이디어는 일단 정확히 반으로 나누고 나중에 정렬하는 것입니다.
// NlogN을 보장한다. N이 8이면 3단계만 필요로 한다.
// 일단 반으로 쪼개고 나중에 병합한다.
// 아주 효율적인 정렬이다. 퀵정렬이 가진 한계를 보완한다. 퀵정렬보다 빠르진 않다.

const data = [7, 6, 5, 8, 3, 5, 9, 1];
const sorted = [];

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const pivot = Math.floor(arr.length / 2);
  const left = arr.slice(0, pivot);
  const right = arr.slice(pivot, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}
 
function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
};

console.log(mergeSort(data))