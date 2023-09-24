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
const library = new Library();

const bookOne = new Book("Small Gods", "Terry Pratchett", "124", true);
const bookTwo = new Book("Big Gods", "Pratchett", "144", false);

bookOne.changeHaveRead();

library.addBook(bookOne);
library.addBook(bookTwo);

class UIHelper {
  constructor() {
    this.contentDiv = document.getElementById("content-div");
  }

  renderBookCards() {
    this.contentDiv.innerHTML = "";

    library.books.forEach((book) => {
      const bookCard = this.createBookCardElement(book);
      this.contentDiv.appendChild(bookCard);
    });
  }

  createBookCardElement(book) {
    const bookCardElement = document.createElement("div");

    const datasetIndex = this.addDatasetIndex(
      bookCardElement,
      library.books,
      book
    );

    this.removeButton(bookCardElement, datasetIndex);

    bookCardElement.classList.add("book-card");

    for (let keys in book) {
      const infoField = document.createElement("p");
      infoField.textContent = book[keys];
      bookCardElement.appendChild(infoField);
    }

    return bookCardElement;
  }

  addDatasetIndex(element, array, arrayItem) {
    element.dataset.index = array.indexOf(arrayItem);
    return element.dataset.index;
  }

  removeButton(parentElement, index) {
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "REMOVE";
    removeBtn.addEventListener("click", () => {
      library.removeBook(index);
      this.renderBookCards();
    });
    parentElement.appendChild(removeBtn);
  }
}

const uiHelper = new UIHelper();

uiHelper.renderBookCards();
