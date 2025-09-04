# Book Finder

A simple web application that allows users to search for books by title, view details, and filter results by author.  
Built with **React**, **Material UI**, and **CSS Modules**, using the **Open Library API**.

---

##  Features
-  **Search by Title** – fetch books from Open Library.  
-  **Book Display** – shows cover, title, authors, and first publish year.  
-  **Filter by Author** – filters the  result with a dropdown.  
-  **Responsive Design** – works on both  mobile and desktop.  
-  **Error Handling** – messages for no results or network errors.  

---

##  Tech Stack
- **React** (Frontend framework)  
- **Material UI (MUI)** (UI components)  
- **CSS Modules** (Styling & responsiveness)  
- **Open Library API** (Book data source)  

---

## Execution Flow
1. **User enters search query** in `SearchBar`.  
2. `App.jsx` fetches results from **Open Library API**.  
3. Books are stored in state + unique authors extracted.  
4. `BookList` maps results → displays `BookCard` for each.  
5. `AuthorFilter` lets user narrow results by author.  
6. UI updates responsively across devices.


   ## Deployment URL
    - **https://book-finder-pdju.vercel.app/**

