// 너비 우선 탐색(Breadth First Search, BFS)
// class로 구현
// 탐색을 할 때 너비를 우선으로 하여 탐색을 수행하는 탐색 알고리즘

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

const BFS = (graph, start) => {    
    const visited = [] // 탐색을 마친 노드들
    let needVisit = [] // 탐색해야할 노드들
    
    needVisit.push(start)

    while(needVisit.length !== 0) { // 탐색할 노드가 남아있는 경우
        const node = needVisit.shift()
        if (!visited.includes(node)) {
            visited.push(node)
            needVisit = [...needVisit, ...graph[node]]
        }
    }
    return visited;
}
console.time()
console.log(BFS(graph, "A"))
console.timeEnd()
