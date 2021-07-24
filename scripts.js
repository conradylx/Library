let myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let author = document.getElementById("author").value;
    let title = document.getElementById("title").value;
    let pages = document.getElementById("pages").value;
    let read = $("#read").is(":checked") ? "true" : "false";
    validateForm(author, title, pages, read);
}

function validateForm(author, title, pages, read) {
    let errors = [];
    if (author === '' || title == null) {
        errors.push("Author cannot be empty");
    }
    if (title === '' || title == null) {
        errors.push("Title cannot be empty");
    }
    if (pages === '' || pages == null) {
        errors.push("Number of pages cannot be empty");
    }
    if(errors.length === 0){
        myLibrary.push(new Book(author, title, pages, read));
        showBookFromLibrary();
    }
}

function removeBookFromLibrary(title) {
    let titleIndex = myLibrary.indexOf(title);
    myLibrary.splice(titleIndex, 1);
    showBookFromLibrary();
}

function updateBookInLibrary(book) {
    let c = myLibrary[book.id];
    c.read = !c.read;
    console.log(c.read, myLibrary[book.id])
}

function showBookFromLibrary() {
    document.getElementById("result").innerHTML = ""
    for (let prop in myLibrary) {
        wrapData(myLibrary[prop], prop);
    }
}

function wrapData(data, prop) {
    let status = data.read;

    document.getElementById("result").innerHTML +=
        '<div class="card">' +
        '<h4 id=data.title >Title:<i> ' + data.title + '</i></h4>' +
        '<p>Author: ' + data.author + '</p>' +
        '<p>Pages: ' + data.pages + '</p>' +
        '<p>Read: <input type=checkbox id="book_id" name=read onclick="updateBookInLibrary(this);"></p>' +
        '<button id="deleteBook" onclick="removeBookFromLibrary(title)">Delete</button>' +
        '</div>';

    let checkbox_id = document.getElementById("book_id");
    checkbox_id.id = prop;

    if (status === 'true') {
        document.getElementById(checkbox_id.id).setAttribute('checked', 'checked');
    } else {
        document.getElementById(checkbox_id.id).removeAttribute('checked');
    }
}
