import React, { useState } from "react";
import styles from "./Form.module.css";

// class Form extends React.Component {
//   state = {
//     confirmationMessageVisible: false,
//     message: ""
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.setState({
//       confirmationMessageVisible: true,
//       message: ""
//     });
//   };

//   handleMessageChanged = e => {
//     this.setState({
//       message: e.currentTarget.value
//     });
//   };

//   render() {
//     const { confirmationMessageVisible, message } = this.state;
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <div className={styles.formField}>
//             <label className={styles.fieldLabel}>Message:</label>
//             <input
//               className={styles.input}
//               value={message}
//               onChange={this.handleMessageChanged}
//             />
//           </div>
//           <button className={styles.button} type="submit">
//             Send
//           </button>
//         </form>
//         {confirmationMessageVisible && (
//           <div className={styles.confirmationMessage}>Message sent</div>
//         )}
//       </>
//     );
//   }
// }

const Form = () => {
  const [confirmationMessageVisible, setConfirmationMessageVisible] = useState(
    false
  );
  const [message, setMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setConfirmationMessageVisible(true);
  };

  const handleMessageChanged = e => {
    setMessage(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.formField}>
          <label className={styles.fieldLabel}>Message:</label>
          <input
            className={styles.input}
            value={message}
            onChange={handleMessageChanged}
          />
        </div>
        <button className={styles.button} type="submit">
          Send
        </button>
      </form>
      {confirmationMessageVisible && (
        <div className={styles.confirmationMessage}>Message sent</div>
      )}
    </>
  );
};

export default Form;
