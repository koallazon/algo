// 깊이 우선 탐색(DFS, Depth First Search)
// 깊은 것을 우선적으로 탐색하는 알고리즘
// 스택(Stack)을 사용

const graph = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'G', 'H', 'I'],
  D: ['B', 'E', 'F'],
  E: ['D'],
  F: ['D'],
  G: ['C'],
  H: ['C'],
  I: ['C', 'J'],
  J: ['I']
};
const visited = [] // 탐색을 마친 노드들
const DFS = (node) => {    
    if (visited.includes(node)) return
    visited.push(node)
    for(let i = 0; i < graph[node].length; i++) {
        DFS(graph[node][i])
    }
    return visited
}

console.log(DFS('A'));