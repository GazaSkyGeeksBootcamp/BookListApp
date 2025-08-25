# BookList Technical requirements

The app is a form with 3 inputs and ability to render a list of books the user adds through the form.

## Folder Structure

- `index.html` - the main structure of the app (entry point)
- `style.css`  - the css style of the app 
- `script.js` - the logic added to the app

## Requirements

1. A form with 3 inputs:
    - The form consists of:
        - **title** input: input with type `text` *
        - **author** input: input with type `text` *
        - **description**: textarea *
    - The form has basic validation of the browser and additional validation with js:
        - title: required *
        - author: required *
        - description: required * & minimum length is 5 words
2. The form should have a good appearance *
3. Handle form submit:
    - Capture inputs values *
    - validate description *
    - create book element: *
        - title --> h3
        - description --> p
        - author --> p
        - delete --> btn
    - create delete button *
    - append delete to the book element *
    - append the book elements to the books container *
    - clear the fields after submitting *
4. The `add` button should initiate the submit event *
5. There should be an event listener on `Enter` button that submits also the form *
6. Every book element should have a delete button, when clicked removed the item from the list *
7. When adding a new book, it should be stored in `localStorage`. *
8. When removing a book, it should be removed from `localStorage`. *
9. When loading/reloading the page it should retrieve the books from storage. *