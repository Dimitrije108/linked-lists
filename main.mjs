#!/usr/bin/env node
import LinkedList from "./LinkedList.mjs";

const list = new LinkedList();
// Testing methods
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
console.log(list.insertAt("dimisha", 15));
console.log(list.removeAt(3));
console.log(list.toString());
