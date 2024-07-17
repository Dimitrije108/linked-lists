#!/usr/bin/env node
class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append = (value) => {
    if (this.head === null) {
      return (this.head = new Node(value, null));
    }
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = new Node(value, null);
  };

  toString = () => {
    if (this.head === null) {
      return "List is empty";
    }
    let curr = this.head;
    let stringOfValues = "";
    while (curr !== null) {
      stringOfValues += `( ${curr.value.toString()} ) -> `;
      curr = curr.next;
    }
    return (stringOfValues += `null`);
  };
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
