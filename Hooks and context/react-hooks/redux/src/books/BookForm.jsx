import React from "react";
import { connect } from "react-redux";
import { addBookAction } from "./booksActions";
import styles from "./BookForm.module.css";
import uuid from "uuid";

class BookForm extends React.Component {
  state = {
    title: ""
  };

  handleAdd = () => {
    const { title } = this.state;
    if (title) {
      this.props.addBook({
        id: uuid(),
        title: this.state.title
      });
      this.setState({
        title: ""
      });
    }
  };

  handleTitleChange = e => {
    this.setState({ title: e.currentTarget.value });
  };

  render() {
    const { title } = this.state;
    return (
      <div className={styles.form}>
        <label className={styles.label}>Title:</label>
        <input
          className={styles.input}
          value={title}
          onChange={this.handleTitleChange}
        />
        <button className={styles.button} onClick={this.handleAdd}>
          Add book
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBook: book => dispatch(addBookAction(book))
  };
};

export default connect(null, mapDispatchToProps)(BookForm);
