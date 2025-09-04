
import React from "react";
import Grid from "@mui/material/Grid";
import BookCard from "./bookCard";
import styles from "./App.module.css";

const BookList = ({ books }) => {
  return (
    <div className={styles.bookList}>
      <Grid container spacing={2} justifyContent="center">
        {books.map((book, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <BookCard book={book} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BookList;
