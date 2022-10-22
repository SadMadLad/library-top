const form = document.querySelector("form");
let bookCounter = 0;
let books = [
//   new book(
//     0,
//     "English Book",
//     "Pagal Aadmi",
//     132,
//     false,
//     `https://placeimg.com/640/480/${bookCounter}`
//   ),
//   new book(
//     1,
//     "Biology",
//     "English Man",
//     200,
//     false,
//     `https://placeimg.com/640/480/${bookCounter}`
//   ),
//   new book(
//     2,
//     "Geology of the Forest",
//     "Best Biology Author",
//     300,
//     false,
//     `https://placeimg.com/640/480/${bookCounter}`
//   ),
//   new book(
//     3,
//     "How to smoke Weed",
//     "Nate Diaz",
//     2000,
//     false,
//     `https://placeimg.com/640/480/${bookCounter}`
//   ),
//   new book(
//     4,
//     "Tobacco = Money",
//     "Dogfather Hermannson",
//     10210,
//     true,
//     `https://placeimg.com/640/480/${bookCounter}`
//   ),
];

//Helper Functions
const handleBookDelete = (e) => {
  let deleteID = e.target.getAttribute("data-id");
  deleteID = parseInt(deleteID);
  for (let i = 0; i < books.length; i++) {
    if (deleteID === books[i].id) {
      books.splice(i, 1);
      break;
    }
  }
  const booksDiv = document.getElementById("books");
  booksDiv.replaceChildren();
  renderBooks(books);
};
const renderBooks = (booksList) => {
  const booksDiv = document.getElementById("books");
  booksList.forEach((book) => {
    const bookDiv = book.makeHTMLBook();
    booksDiv.appendChild(bookDiv);
  });
};

//Book Object
function book(id, title, author, pages, isRead, imageURL) {
  this.id = id;
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.isRead = isRead;
  this.imageURL = imageURL;
  this.toggleRead = () => {
    this.isRead = !this.isRead;
  };
  this.returnRead = () => {
    return this.isRead ? "Yes" : "No";
  };
  this.bookInfo = () => {
    const info = `Author: ${this.author}\nTitle: ${this.title}\nPages: ${this.pages}\nAlready Read: ${this.isRead}`;
    return info;
  };
  // Makes the HTML out of the object
  (this.makeHTMLBook = () => {
    const titleTag = document.createElement("h2");
    const authorTag = document.createElement("h3");
    const pagesTag = document.createElement("p");
    const isReadTag = document.createElement("button");
    const deleteButton = document.createElement("button");
    const imageTag = document.createElement("img");

    const detailsDiv = document.createElement("div");
    const imageDiv = document.createElement("div");
    const buttonsDiv = document.createElement("div");
    const alreadyRead = this.isRead ? "Yes" : "No";

    titleTag.textContent = this.title;
    authorTag.textContent = this.author;
    pagesTag.textContent = `${this.pages}`;
    isReadTag.textContent = `Read: ${alreadyRead}`;
    deleteButton.textContent = `Remove Book`;

    imageTag.setAttribute("src", this.imageURL);
    imageDiv.appendChild(imageTag);
    imageDiv.classList.add("image");

    deleteButton.setAttribute("data-id", this.id);
    deleteButton.addEventListener("click", handleBookDelete);
    isReadTag.addEventListener("click", this.readToggleEvent);
    if (this.isRead === true) {
      isReadTag.classList.add("read");
    }
    buttonsDiv.classList.add("buttons");
    buttonsDiv.append(isReadTag, deleteButton);

    detailsDiv.classList.add("book-details");
    detailsDiv.append(titleTag, authorTag, pagesTag, buttonsDiv);

    const bookDiv = document.createElement("div");
    bookDiv.append(detailsDiv, imageDiv);
    bookDiv.classList.add("book");

    return bookDiv;
  }),
    //Switch between Read: Yes and No.
    (this.readToggleEvent = (e) => {
      this.toggleRead();
      const read = this.returnRead();
      e.target.textContent = `Read: ${read}`;
      e.target.classList.toggle("read");
    });
}

renderBooks(books);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = new FormData(e.target);
  const modal = document.querySelector("#myModal");
  modal.style.display = "none";

  bookCounter++;
  const bookData = [
    bookCounter,
    form.get("title"),
    form.get("author"),
    form.get("pages"),
    form.get("read") ? true : false,
    `https://placeimg.com/640/480/${bookCounter}`,
  ];

  const newBook = new book(...bookData);
  books.push(newBook); 

  const booksDiv = document.getElementById("books");
  booksDiv.replaceChildren();
  renderBooks(books);
});
