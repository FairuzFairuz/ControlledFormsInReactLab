import React, { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);
  const [newBook, setNewBook] = useState({ title: "", author: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks((prevBooks) => [...prevBooks, newBook]);
    setNewBook({ title: "", author: "" });
  };

  return (
    <div>
      <div className="bookshelfDiv">
        <div className="formDiv">
          <h3>Add a Book</h3>

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={newBook.title}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="author">Author</label>
              <input
                type="text"
                id="author"
                name="author"
                value={newBook.author}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Add Book</button>
          </form>
        </div>
      </div>

      <div className="bookCardsDiv">
        <h3>Current Bookshelf</h3>
        <div>
          {books.map((book, index) => (
            <div key={index} className="bookCardsIdv">
              <p>Title: {book.title}</p>
              <p>Author: {book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookshelf;
