class Library {
  constructor() {
    this.library = [];
  }

  addBook(book) {
    this.library.push(book);
  }

  removeBook(index) {
    this.library.splice(index, 1);
  }
}

class Book {
  constructor(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
  }

  changeHaveRead() {
    if (this.haveRead === true) {
      this.haveRead = false;
    } else if (this.haveRead === false) {
      this.haveRead = true;
    }
  }
}

class UIHelper {
  constructor() {}
}
