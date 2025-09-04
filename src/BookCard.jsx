
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import styles from "./App.module.css";

const BookCard = ({ book }) => {
  const coverId = book.cover_i;
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  return (
    <Card className={styles.bookCard}>
      <CardMedia
        component="img"
        height="200"
        image={coverUrl}
        alt={book.title}
      />
      <CardContent>
        <Typography variant="h6">{book.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          First Published: {book.first_publish_year || "N/A"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BookCard;
