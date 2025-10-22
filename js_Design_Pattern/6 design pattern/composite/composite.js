class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  add(child) {
    this.children.push(child);
  }

  remove(child) {
    const index = this.children.indexOf(child);
    if (index !== -1) this.children.splice(index, 1);
  }

  getChild(i) {
    return this.children[i];
  }
}

class Book extends Node {
  constructor(name, pages) {
    super(name);
    this.pages = pages;
  }

  show(indent = 1) {
    console.log(`${"-".repeat(indent)} ${this.name} (${this.pages} pages)`);
  }
}
class Box extends Node {
  constructor(name) {
    super(name);
  }

  show(indent = 1) {
    console.log(`${"-".repeat(indent)} ${this.name}`);
    for (let child of this.children) {
      child.show(indent + 1);
    }
  }
}

const mainBox = new Box("Main Box");
const smallBox = new Box("Small Box");

const book1 = new Book("Book A", 120);
const book2 = new Book("Book B", 250);
const book3 = new Book("Book C", 180);

smallBox.add(book1);
smallBox.add(book2);
mainBox.add(smallBox);
mainBox.add(book3);

export default mainBox;
