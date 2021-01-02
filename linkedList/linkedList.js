class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //add
  add(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  //insertAt
  insertAt(value, index) {
    //base condition
    if (index > this.size || (index < 0 && this.size)) {
      return false;
    } else {
      let node = new Node(value);
      let current = this.head;
      let prev = null;
      let i = 0;
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        while (i < index) {
          prev = current;
          current = current.next;
          i++;
        }
        node.next = current;
        prev.next = node;
      }
    }
    this.size++;
  }
  //delete
  removeElement(value) {
    let current = this.head;
    let prev = null;

    while (current != null) {
      if (current.value == value) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.value;
      }

      prev = current;
      current = current.next;
    }
    return false;
  }

  removeFrom(index) {
    let current = this.head;
    let prev = null;
    let i = 0;
    if (index == 0) {
      this.head = this.head.next;
    } else {
      while (i < index) {
        prev = current;
        current = current.next;
        i++;
      }
      prev.next = current.next;
    }
  }

  //isEmpty
  isEmpty() {
    return this.size === 0 ? true : false;
  }
  //printList
  printList() {
    let current = this.head;
    let i = 0;
    while (current) {
      console.log(current.value, i);
      current = current.next;
      i++;
    }
  }
  //sizeOfList
  sizeOfList() {
    return this.size;
  }

  //reverse
  reverse() {
    let current = this.head;
    let next = null;
    let prev = null;
    while (current != null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  getHead() {
    return this.head;
  }

  nthNodeFromLast(k) {
    if (this.head) {
      let slow = this.head;
      let fast = this.head;
      while (k && fast) {
        fast = fast.next;
        k--;
      }
      if(k){
        return null
      }
      while (fast) {
        fast = fast.next;
        slow = slow.next;
      }

      return slow.value;
    }
    return this.head;
  }

  rotate(k) {}
}

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(6);
// list.printList();
console.log(list.nthNodeFromLast(0));
list.reverse();
