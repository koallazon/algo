// Queue
// 들어온 것이 먼저 나가는 (First In First Out, FIFO)구조

export class Queue {
    constructor() {
        this._arr = []
    }

    set arr (value) {
        this._arr = value
    }

    push(data) {
        return this._arr.push(data)
    }
    
    pop() {
        return this._arr.shift()
    }

    emtpy() {
        return this._arr.length === 0
    }

    top() {
        return this._arr[0]
    }

    print() {
        while(!this.emtpy()) {
            console.log(this.top())
            this.pop()
        }
    }
}

// const que = new Queue()
// que.push(4)
// que.push(5)
// que.push(6)
// que.push(40)
// que.push(50)
// que.push(60)
// que.pop()
// que.print()