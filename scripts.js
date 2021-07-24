let myLibrary = [];
let index = 0;

function Book(author, book, year){
    this.author = author;
    this.book = book;
    this.year = year;
}

function addBookToLibrary(){
    let author = document.getElementById("author").value;
    let book = document.getElementById("book").value;
    let year = document.getElementById("year").value;
    let newBook = new Book(author, book, year)
    console.log(newBook)
    myLibrary[index] = newBook;
    index++;
    // document.getElementById("author").value=""
    // document.getElementById("book").value=""
    // document.getElementById("year").value=""
}

function showBookFromLibrary(){
    document.getElementById("result").innerHTML = ""
    for(let prop in myLibrary){
        wrapData(myLibrary[prop]);
    }
}

function wrapData(data){
    document.getElementById("result").innerHTML+=
        '<div class="card">'+
        '<div class="container">'+
        '<h4>Title:<i> '+data.book+'</i></h4>'+
        '<p>Author: '+data.author+'</p>'+
        '<p>Year: '+data.year+'</p>'+
        '</div>'+
        '</div>'
}