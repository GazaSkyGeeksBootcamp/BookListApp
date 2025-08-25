import { Book } from "./modules/Book.js";
import { BookList } from "./modules/booklist.js";
import { Storage } from "./modules/storage.js";

const bookForm = document.getElementById("book-form");

const titleInput = document.getElementById("book-name");
const authorInput = document.getElementById("book-author");
const descriptionInput = document.getElementById("book-description");

const bookList = new BookList("books-container");
const storage = new Storage("books");

document.addEventListener("DOMContentLoaded", () => {
  const list = storage.getList();
  const booksElements = list.map((item) => {
    const book = new Book(item);
    return book.create();
  });
  bookList.append(...booksElements);
});

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const values = {
    id: Math.random(),
    title: titleInput.value,
    author: authorInput.value,
    description: descriptionInput.value,
  };

  const book = new Book(values);

  storage.save(book.obj);

  const bookEl = book.create();

  bookList.append(bookEl);
});

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const bookId = e.target.getAttribute("data-book-id"); // id
    bookList.remove(bookId);
    storage.removeItem(bookId);
  }
});
