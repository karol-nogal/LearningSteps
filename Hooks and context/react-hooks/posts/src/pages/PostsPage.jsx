import React, { useEffect, useState } from "react";
import styles from "./PostsPage.module.css";
import Post from "../components/Post";

const PAGE_SIZE = 10;

// class PostsPage extends React.Component {
//   state = {
//     start: 0,
//     posts: []
//   };

//   componentDidMount() {
//     const { start } = this.state;
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(response => response.json())
//       .then(allPosts => {
//         this.setState({
//           posts: allPosts.slice(
//             start * PAGE_SIZE,
//             start * PAGE_SIZE + PAGE_SIZE
//           )
//         });
//       });
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const { start } = this.state;
//     if (prevState.start !== start) {
//       fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(response => response.json())
//         .then(allPosts => {
//           this.setState({
//             posts: allPosts.slice(
//               start * PAGE_SIZE,
//               start * PAGE_SIZE + PAGE_SIZE
//             )
//           });
//         });
//     }
//   }

//   handlePrevClick = () => {
//     const { start } = this.state;
//     this.setState({ start: start - 1 });
//   };

//   handleNextClick = () => {
//     const { start } = this.state;
//     this.setState({ start: start + 1 });
//   };

//   render() {
//     const { posts } = this.state;
//     return (
//       <div>
//         <h3>Posts</h3>
//         <div>
//           {!posts.length && <div>No result</div>}
//           {posts.length > 0 && posts.map(post => <Post post={post} />)}
//         </div>
//         <div>
//           <button className={styles.button} onClick={this.handlePrevClick}>
//             Prev
//           </button>
//           <button className={styles.button} onClick={this.handleNextClick}>
//             Next
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

const PostsPage = () => {
  const [start, setStart] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(allPosts => {
        setPosts(
          allPosts.slice(start * PAGE_SIZE, start * PAGE_SIZE + PAGE_SIZE)
        );
      });
  }, [start]);

  const handlePrevClick = () => {
    setStart(start - 1);
  };

  const handleNextClick = () => {
    setStart(start + 1);
  };

  return (
    <div>
      <h3>Posts</h3>
      <div>
        {!posts.length && <div>No result</div>}
        {posts.length > 0 &&
          posts.map((post, index) => <Post post={post} key={index} />)}
      </div>
      <div>
        <button className={styles.button} onClick={handlePrevClick}>
          Prev
        </button>
        <button className={styles.button} onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PostsPage;
