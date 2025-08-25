export class BookList {
  #container;
  constructor(selector) {
    this.#container = document.getElementById(selector);
  }

  append(bookEl) {
    this.#container.append(bookEl);
  }

  remove(bookId) {
    this.#container.getElementById(`book-item-${bookId}`).remove();
  }
}
