export class Book {
  constructor(bookValues) {
    this.obj = bookValues;
  }

  create() {
    const bookEl = document.createElement("div");
    bookEl.classList.add("book-item");

    bookEl.setAttribute("id", `book-item-${this.obj.id}`);

    const bookHeading = document.createElement("h3");
    const bookDesc = document.createElement("p");
    const bookAuthor = document.createElement("p");
    const bookDeleteButton = document.createElement("button");

    bookHeading.textContent = this.obj.title;
    bookDesc.textContent = this.obj.description;
    bookAuthor.textContent = this.obj.author;
    bookDeleteButton.textContent = "delete";
    bookDeleteButton.classList.add("delete-btn");
    bookDeleteButton.dataset.bookId = this.obj.id;

    bookEl.append(bookHeading, bookDesc, bookAuthor, bookDeleteButton);
    return bookEl;
  }
}
