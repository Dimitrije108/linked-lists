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

  prepend = (value) => {
    this.head = new Node(value, this.head);
  };

  size = () => {
    let curr = this.head;
    let length = 0;
    while (curr !== null) {
      length += 1;
      curr = curr.next;
    }
    return length;
  };

  getHead = () => {
    if (this.head === null) {
      return "List is empty";
    }
    return this.head;
  };

  getTail = () => {
    if (this.head === null) {
      return "List is empty";
    }
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    return curr;
  };

  at = (index) => {
    if (this.head === null) {
      return "List is empty";
    }
    if (index < 1) {
      return "Search for a valid item";
    }
    let curr = this.head;
    let currAt = 1;
    while (curr !== null) {
      if (currAt === index) {
        return curr;
      }
      currAt += 1;
      curr = curr.next;
    }
    return "No item found";
  };

  pop = () => {
    if (this.head === null) {
      return "List is empty";
    }
    let curr = this.head;
    let prev = null;
    while (curr.next !== null) {
      prev = curr;
      curr = curr.next;
    }
    // in case there's only one item in the list
    if (prev === null) {
      this.head = null;
    } else {
      prev.next = null;
    }
  };

  contains = (value) => {
    if (this.head === null) {
      return "List is empty";
    }
    let curr = this.head;
    while (curr !== null) {
      if (curr.value === value) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  };

  find = (value) => {
    if (this.head === null) {
      return "List is empty";
    }
    let curr = this.head;
    let index = 1;
    while (curr !== null) {
      if (curr.value === value) {
        return index;
      }
      curr = curr.next;
      index += 1;
    }
    return null;
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
list.prepend("perro");
list.prepend("gato");

console.log(list.toString());
console.log(list.size());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.at(6));
console.log(list.pop());
console.log(list.toString());
console.log(list.contains("dog"));
console.log(list.find("snake"));
