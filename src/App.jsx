
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import BookList from "./BookList";
import styles from "./App.module.css";
import AuthorFilter from "./AuthorFilter";


function App() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const [allAuthors, setAllAuthors] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState("");

  const fetchBooks = async (title) => {
    try {
      setError("");
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${title}`
      );
      const data = await response.json();

      if (data.docs.length === 0) {
        setError("No books found.");
        setBooks([]);
        setAllAuthors([]);
      } else {
        setBooks(data.docs);

        const authors = new Set();
        data.docs.forEach((b) => {
          if (b.author_name) {
            b.author_name.forEach((a) => authors.add(a));
          }
        });
        setAllAuthors([...authors].sort());
      }
    } catch (err) {
      setError("Something went wrong. Try again!");
    }
  };

  const filteredBooks = selectedAuthor
    ? books.filter(
        (book) =>
          book.author_name && book.author_name.includes(selectedAuthor)
      )
    : books;

  return (
    <div className={styles.container}>
      <marquee>search for any book | knowledge is divine</marquee>
      <h1>📚Hi Alex !!! What Book are you picking today</h1>
      <SearchBar onSearch={fetchBooks} />
      {allAuthors.length > 0 && (
        <AuthorFilter
          authors={allAuthors}
          selected={selectedAuthor}
          onChange={setSelectedAuthor}
        />
      )}
      {error && <p className={styles.error}>{error}</p>}
      <BookList books={filteredBooks} />
    </div>
  );
}

export default App;
