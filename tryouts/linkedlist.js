class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head) {
    this.head = null;
  }

  insertFirst(data) {
    let newNode = new Node(data);
    newNode.next = this.node || null;
    this.node = newNode;
    this.head = newNode;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    while (this.node.next) {
      if (!this.node.next) {
        return this.node;
      }

      this.node = this.node.next;
    }
    return this.head;
  }
}
let ll = new LinkedList();
ll.insertFirst("First");
ll.insertFirst("Second");
ll.insertFirst("Third");
console.log(ll);
