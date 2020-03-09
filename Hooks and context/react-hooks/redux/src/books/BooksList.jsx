import React from "react";
import {  useSelector, useDispatch } from "react-redux";
import styles from "./BooksList.module.css";
import { removeBookAction } from "./booksActions";
import { getBooks } from "./booksSelector";

// class BooksList extends React.Component {
//   handleRemove = bookId => () => {
//     this.props.removeBook(bookId);
//   };

//   render() {
//     const { books } = this.props;
//     return (
//       <div className={styles.container}>
//         <h3>List of books:</h3>
//         {books.map((book, index) => {
//           return (
//             <div className={styles.title} key={index}>
//               {book.title}
//               <button
//                 className={styles.removeButton}
//                 onClick={this.handleRemove(book.id)}
//               >
//                 Remove
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

const BooksList = () => {
  const books = useSelector(state=>getBooks(state));
  const dispatch = useDispatch();

  const handleRemove = bookId => () => {
    dispatch(removeBookAction(bookId))
  };

  return (
    <div className={styles.container}>
      <h3>List of books:</h3>
      {books.map((book, index) => {
        return (
          <div className={styles.title} key={index}>
            {book.title}
            <button
              className={styles.removeButton}
              onClick={handleRemove(book.id)}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//     books: getBooks(state)
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     removeBook: bookId => dispatch(removeBookAction(bookId))
//   };
// };

export default BooksList;
