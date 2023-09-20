class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(index) {
    this.books.splice(index, 1);
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
const bookTwo = new Book("Big Gods", "Pratchett", "144", false);
const library = new Library();

bookOne.changeHaveRead();

library.addBook(bookOne);
library.addBook(bookTwo);

class UIHelper {
  constructor() {
    this.contentDiv = document.getElementById("content-div");
  }

  renderBookCards() {
    library.books.forEach((book) => {
      const bookCard = this.createBookCardElement(book);
      this.contentDiv.appendChild(bookCard);
    });
  }

  createBookCardElement(book) {
    const bookCardElement = document.createElement("div");
    bookCardElement.classList.add("book-card");
    for (let keys in book) {
      const infoField = document.createElement("p");
      infoField.textContent = book[keys];
      bookCardElement.appendChild(infoField);
    }
    return bookCardElement;
  }
}

const uiHelper = new UIHelper();
uiHelper.renderBookCards();
