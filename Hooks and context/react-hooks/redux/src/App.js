import React from "react";
import styles from "./App.module.css";
import BooksList from "./books/BooksList";
import BookForm from "./books/BookForm";

function App() {
  return (
    <div className={styles.container}>
      <BookForm />
      <BooksList />
    </div>
  );
}

export default App;
