
const myLibrary = [];

function Book() {

}

const newBookRequest = document.getElementById('addBtn')
const newBookSubmit = document.getElementById('submit');


//When 'Add Book' button is selected, open modal. When close is selected, close modal.
const openModalButton = document.querySelectorAll('[data-modal-target]');
const closeModalButton = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal==null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal==null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

//When all expected data is provided and submit button is clicked, store data

let newBook = document.getElementById("new-book-form")

newBook.addEventListener("submit", (e) => {
    e.preventDefault();

    let bookTitle = document.getElementById("book_title")
    let bookAuthor = document.getElementById("author")
    let bookPages = document.getElementById("pages")
    let previouslyRead = document.getElementById("read")

    console.log(bookTitle.value)
    console.log(bookAuthor.value)
    console.log(bookPages.value)
    console.log(previouslyRead.value)


    bookTitle.value = "";
    bookAuthor.value = "";
    bookPages.value = "";
    previouslyRead.value = "";
})

//Take stored data and display it on a new card