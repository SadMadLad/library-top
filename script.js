const books = [];

function book(author, title, pages, isRead){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
    this.toggleRead = () => {
        this.isRead = !this.isRead;
    }
    this.bookInfo = () => {
        const info = `Author: ${this.author}\nTitle: ${this.title}\nPages: ${this.pages}\nAlready Read: ${this.isRead}`;
        return info;
    }
    this.makeHTMLBook = () => {
        const titleTag = document.createElement("h2");
        const authorTag = document.createElement("p");
        const pagesTag = document.createElement("p");
        const isReadTag = document.createElement("button");
        const imageTag = document.createElement("div");

        titleTag.textContent = this.title;
        authorTag.textContent = this.author; 
        pagesTag.textContent = `${this.pages}`;
        isReadTag.textContent = `${this.isRead}`;

        const bookDiv = document.createElement('div');
        bookDiv.append(titleTag, authorTag, pagesTag, isReadTag);
        bookDiv.classList.add('book');

        console.log(bookDiv);

        return bookDiv;
    }
}

const renderBook = (book) => {
    const bookDiv = book.makeHTMLBook();
    const booksDiv = document.getElementById('books');
    booksDiv.appendChild(bookDiv);
}

const english = new book('a', 'b', 12, false);
console.log(english.bookInfo());
english.toggleRead();
console.log(english.bookInfo());
english.makeHTMLBook();
renderBook(english);
//const bookAdderButton = document.getElementsByClassName('add-book');

