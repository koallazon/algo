// 너비 우선 탐색(Breadth First Search, BFS)
// class로 구현
// 탐색을 할 때 너비를 우선으로 하여 탐색을 수행하는 탐색 알고리즘
import { Queue } from './queue.js'

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

class Bfs{
    constructor(graph, start) {
        this.graph = graph
        this.start = start
        this.visited = new Queue() // 탐색을 마친 노드들
        this.needVisit = new Queue() // 탐색해야할 노드들
        this.needVisit.push(start)
    }

    emptyNeedVisit() {
        return this.needVisit._arr.length === 0
    }

    search() {
        while(!this.emptyNeedVisit()) {
            const node = this.needVisit.pop()
            if (!this.visited._arr.includes(node)) {
                this.visited.push(node)
                this.needVisit._arr = [...this.needVisit._arr, ...this.graph[node]]
            }
        }
        return this.visited._arr
    }
}
console.time()
const BFS = new Bfs(graph, 'A')
const res = BFS.search()
console.time(res)
console.timeEnd()
// BFS.push(1)
// BFS.push(3)
// BFS.push(4)
// BFS.print()


