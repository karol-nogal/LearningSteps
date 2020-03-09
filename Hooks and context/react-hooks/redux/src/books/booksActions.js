export const addBookAction = book => ({
  type: "ADD_BOOK",
  payload: book
});

export const removeBookAction = bookId => ({
  type: "REMOVE_BOOK",
  payload: bookId
});
