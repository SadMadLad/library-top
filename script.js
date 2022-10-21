const books = [];
let bookCounter = 1;

function book(id, title, author, pages, isRead, imageURL){
    this.id = id;
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
    this.imageURL = imageURL;
    this.toggleRead = () => {
        this.isRead = !this.isRead;
    }
    this.bookInfo = () => {
        const info = `Author: ${this.author}\nTitle: ${this.title}\nPages: ${this.pages}\nAlready Read: ${this.isRead}`;
        return info;
    }
    this.makeHTMLBook = () => {
        const titleTag = document.createElement("h2");
        const authorTag = document.createElement("h3");
        const pagesTag = document.createElement("p");
        const isReadTag = document.createElement("button");        
        const imageTag = document.createElement("img");

        const detailsDiv = document.createElement("div");
        const imageDiv = document.createElement("div");

        titleTag.textContent = this.title;
        authorTag.textContent = this.author; 
        pagesTag.textContent = `${this.pages}`;
        isReadTag.textContent = `${this.isRead}`;

        imageTag.setAttribute('src', this.imageURL);
        imageDiv.appendChild(imageTag);
        imageDiv.classList.add('image');
        detailsDiv.classList.add('book-details');
        detailsDiv.append(titleTag, authorTag, pagesTag, isReadTag);
        const bookDiv = document.createElement('div');
        bookDiv.append(detailsDiv, imageDiv);
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

const english = new book(0, 'English Book', 'Pagal Aadmi', 132, false, `https://source.unsplash.com/random/${bookCounter}`);
bookCounter++;
const biology = new book(1, 'Biology', 'English Man', 200, false, `https://source.unsplash.com/random/${bookCounter}`);
bookCounter++;
const geology = new book(2, 'Geology of the Forest', 'Best Biology Author', 300, false, `https://source.unsplash.com/random/${bookCounter}`);
bookCounter++;
const weed = new book(3, 'How to smoke Weed', 'Nate Diaz', 2000, false, `https://source.unsplash.com/random/${bookCounter}`);
bookCounter++;
const tobacco = new book(4, 'Tobacco = Money', 'Dogfather Hermannson', 10210, true, `https://source.unsplash.com/random/${bookCounter}`);

renderBook(english);
renderBook(biology);
renderBook(geology);
renderBook(weed);
renderBook(tobacco);
// console.log(english.bookInfo());
// english.toggleRead();
// console.log(english.bookInfo());
// english.makeHTMLBook();
// renderBook(english);
//const bookAdderButton = document.getElementsByClassName('add-book');

