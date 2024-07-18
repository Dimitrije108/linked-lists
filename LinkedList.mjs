#!/usr/bin/env node
class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
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
      return "Invalid number";
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

  insertAt = (value, index) => {
    if (index < 1) {
      return "Invalid number";
    }
    if (this.head === null) {
      return "List is empty";
    }
    if (index === 1) {
      this.head = new Node(value, this.head);
      return;
    }
    let curr = this.head;
    let prev = null;
    let currAt = 1;
    while (curr !== null) {
      if (currAt === index) {
        prev.next = new Node(value, curr);
        return;
      }
      prev = curr;
      curr = curr.next;
      currAt += 1;
    }
    // insert at the end of the list if index is greater than
    // the node list
    prev.next = new Node(value, null);
  };

  removeAt = (index) => {
    if (index < 1) {
      return "Invalid number";
    }
    if (this.head === null) {
      return "List is empty";
    }
    if (index === 1) {
      this.head = this.head.next;
      return;
    }
    let curr = this.head;
    let prev = null;
    let currAt = 1;
    while (curr !== null) {
      if (currAt === index) {
        prev.next = prev.next.next;
        return;
      }
      prev = curr;
      curr = curr.next;
      currAt += 1;
    }
    return "No element at that index";
  };
}
