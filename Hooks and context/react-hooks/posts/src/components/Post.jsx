import React from "react";
import styles from "./Post.module.css";

const Post = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.id}>{post.id}</div>
      <div>{post.title}</div>
    </div>
  );
};

export default Post;
