class Node {
    constructor(data) {
        this.data = data;
        this.previous = null;
        this.next = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.numberOfValues = 0;
    }
    add(data) {
        let node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.previous = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.numberOfValues++;
    }
    remove(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                if (current === this.head && current === this.tail) {
                    this.head = null;
                    this.tail = null;
                } else if (current === this.head) {
                    this.head = this.head.next;
                    this.head.previous = null;
                } else if (current === this.tail) {
                    this.tail = this.tail.previous;
                    this.tail.next = null;
                } else {
                    current.previous.next = current.next;
                    current.next.previous = current.previous;
                }
                this.numberOfValues--;
            }
            current = current.next;
        }
    }
    insertAfter(data, toNodeData) {
        let current = this.head;
        while (current) {
            if (current.data === toNodeData) {
                let node = new Node(data);
                if (current === this.tail) {
                    this.add(data);
                } else {
                    current.next.previous = node;
                    node.previous = current;
                    node.next = current.next;
                    current.next = node;
                    this.numberOfValues++;
                }
            }
            current = current.next;
        }
    }
    traverse(fn) {
        let current = this.head;
        while (current) {
            if (fn) {
                fn(current);
            }
            current = current.next;
        }
    }
    traverseReverse(fn) {
        let current = this.tail;
        while (current) {
            if (fn) {
                fn(current);
            }
            current = current.previous;
        }
    }
    length() {
        return this.numberOfValues;
    }
    print() {
        let string = "";
        let current = this.head;
        while (current) {
            string += `${current.data} `;
            current = current.next;
        }
        console.log(string.trim());
    }
}
let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.print(); // => ''
doublyLinkedList.add(1);
doublyLinkedList.add(2);
doublyLinkedList.add(3);
doublyLinkedList.add(4);
doublyLinkedList.print(); // => 1 2 3 4
console.log("length is 4:", doublyLinkedList.length()); // => 4
doublyLinkedList.remove(3); // remove value
doublyLinkedList.print(); // => 1 2 4
doublyLinkedList.remove(9); // remove non existing value
doublyLinkedList.print(); // => 1 2 4
doublyLinkedList.remove(1); // remove head
doublyLinkedList.print(); // => 2 4
doublyLinkedList.remove(4); // remove tail
doublyLinkedList.print(); // => 2
console.log("length is 1:", doublyLinkedList.length()); // => 1
doublyLinkedList.remove(2); // remove tail, the list should be empty
doublyLinkedList.print(); // => ''
console.log("length is 0:", doublyLinkedList.length()); // => 0
doublyLinkedList.add(2);
doublyLinkedList.add(6);
doublyLinkedList.print(); // => 2 6
doublyLinkedList.insertAfter(3, 2);
doublyLinkedList.print(); // => 2 3 6
doublyLinkedList.traverseReverse(({data}) => {
    console.log(data);
});
doublyLinkedList.insertAfter(4, 3);
doublyLinkedList.print(); // => 2 3 4 6
doublyLinkedList.insertAfter(5, 9); // insertAfter a non existing node
doublyLinkedList.print(); // => 2 3 4 6
doublyLinkedList.insertAfter(5, 4);
doublyLinkedList.insertAfter(7, 6); // insertAfter the tail
doublyLinkedList.print(); // => 2 3 4 5 6 7
doublyLinkedList.add(8); // add node with normal method
doublyLinkedList.print(); // => 2 3 4 5 6 7 8
console.log("length is 7:", doublyLinkedList.length()); // => 7
doublyLinkedList.traverse(node => {
    node.data = node.data + 10;
});
doublyLinkedList.print(); // => 12 13 14 15 16 17 18
doublyLinkedList.traverse(({data}) => {
    console.log(data);
}); // => 12 13 14 15 16 17 18
console.log("length is 7:", doublyLinkedList.length()); // => 7
doublyLinkedList.traverseReverse(({data}) => {
    console.log(data);
}); // => 18 17 16 15 14 13 12
doublyLinkedList.print(); // => 12 13 14 15 16 17 18
console.log("length is 7:", doublyLinkedList.length()); // => 7
/*
   ~ js-files : (master) node double-linked-list.js 
1 2 3 4
length is 4: 4
1 2 4
1 2 4
2 4
2
length is 1: 1
length is 0: 0
2 6
2 3 6
6
3
2
2 3 4 6
2 3 4 6
2 3 4 5 6 7
2 3 4 5 6 7 8
length is 7: 7
12 13 14 15 16 17 18
12
13
14
15
16
17
18
length is 7: 7
18
17
16
15
14
13
12
12 13 14 15 16 17 18
length is 7: 7
 ~ js-files : (master) 
*/