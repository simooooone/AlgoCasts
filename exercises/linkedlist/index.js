// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head) {
    this.head = null;
    this.size = 0;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;

    while (node.next) {
      node = node.next;
    }

    return node;
  }

  size() {
    return this.size;
  }

  clear() {
    this.head = undefined;
    this.size = 0;
  }

  removeFirst() {
    this.head = this.head.next;
    this.size--;
  }

  removeLast() {
    let node = this.head;

    while (node.next.next) {
      node = node.next;
    }

    node.next = null;

    this.size--;
  }

  insertLast(data) {
    let node = this.head;

    while (node.next) {
      node = node.next;
    }

    node.next = new Node(data);

    this.size++;
  }

  getAt(n) {
    let node = this.head;

    for (let i = 1; i < n; i++) {
      node = node.next;
    }

    return node;
  }

  removeAt(n) {
    let node = this.head;

    for (let i = 1; i < n - 1; i++) {
      node = node.next;
    }

    node.next = node.next.next;
    this.size--;
  }
}

module.exports = { Node, LinkedList };
