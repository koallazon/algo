// linked list
// https://visualgo.net/en

const list = {
    head: {
        value: 90,
        next: {
            value: 10,
            next: {
                value: 89,
                next: {
                    value: 100,
                    next: null
                }
            }
        }
    }
}

// list.head
// { value: 90, next: {...}}
// list.head.value
// 90
// list.head.next.value
// 10
// list.head.next.next.value

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        let init = new Node('init')
        this.head = init;
        this.tail = init;

        this.curNode = undefined;
        this.dataLeng = 0;
    }

    length() {
        return this.dataLeng;
    }

    append(data) {
        let newNode = new Node(data)
        this.tail.next = newNode
        this.tail = newNode;
        this.dataLeng += 1;
    }

    toString() {
        let roundCurNode = this.head;
        roundCurNode = roundCurNode.next;

        let s = ''
        for (let i = 0; i < this.dataLeng; i++) {
            s += `${roundCurNode.data},`
            roundCurNode = roundCurNode.next;
        }
        return `[${s.slice(0, -2)}]`;
    }

    get fullData() {
        let roundCurNode = this.head;
        roundCurNode = roundCurNode.next;

        let s = ''
        for (let i = 0; i < this.dataLeng; i++) {
            s += `${roundCurNode.data},`
            roundCurNode = roundCurNode.next;
        }
        return JSON.parse(`[${s.slice(0, -2)}]`);
    }

    insert(index, data) {
        let roundCurNode = this.head;
        roundCurNode = roundCurNode.next;

        let s = ''
        for (let i = 0; i < index; i++) {
            roundCurNode = roundCurNode.next;
        }
        return JSON.parse(`[${s.slice(0, -2)}]`);
    }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
console.log(l.fullData)



