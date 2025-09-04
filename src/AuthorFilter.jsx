import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "./App.module.css";

const AuthorFilter = ({ authors, selected, onChange }) => {
  return (
    <div className={styles.filterBar}>
      <FormControl size="small" sx={{ minWidth: 200 }}>
        <InputLabel id="author-label">Filter by Author</InputLabel>
        <Select
          labelId="author-label"
          value={selected}
          label="Filter by Author"
          onChange={(e) => onChange(e.target.value)}
        >
          <MenuItem value="">All Authors</MenuItem>
          {authors.map((author, idx) => (
            <MenuItem key={idx} value={author}>
              {author}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default AuthorFilter;
