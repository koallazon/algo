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

class Dfs {
    constructor(graph, start) {
        this.graph = graph
        this.start = start
        this.visited = [] // 탐색을 마친 노드들
    }

    search(node) {
        if (this.visited.includes(node)) return
        this.visited.push(node)
        for(let i = 0; i < this.graph[node].length; i++) {
            const nextNode = this.graph[node][i]
            this.search(nextNode)
        }
    }
}

const dfs = new Dfs(graph, 'A')
dfs.search('A')
console.log(dfs.visited)