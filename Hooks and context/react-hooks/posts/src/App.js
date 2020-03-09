import React from "react";
import styles from "./App.module.css";
import PostsPage from "./pages/PostsPage";

function App() {
  return (
    <div className={styles.container}>
      <PostsPage />
    </div>
  );
}

export default App;
