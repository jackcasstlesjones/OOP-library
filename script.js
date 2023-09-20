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

const bookOne = new Book("Small Gods", "Terry Pratchett", "124", true);
const library = new Library();

console.log(bookOne);
bookOne.changeHaveRead();
library;
console.log(bookOne);
library.addBook(bookOne);

class UIHelper {
  constructor() {
    this.contentDiv = document.getElementById("content-div");
  }

  render() {
    // console.log(library.library);
    library.library.forEach((element, index) => {
      const bookCard = document.createElement("div");
      bookCard.textContent = element;
      this.contentDiv.appendChild(bookCard);
    });
  }
}

const uiHelper = new UIHelper();
uiHelper.render();
