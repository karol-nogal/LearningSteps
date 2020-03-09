import React, {useState} from "react";
import styles from "./CounterPage.module.css";

// class CounterPage extends React.Component {
//   state = {
//     counter: 1
//   };

//   handleIncrement = () => {
//     this.setState({
//       counter: this.state.counter + 1
//     });
//   };

//   handleDecrement = () => {
//     this.setState({
//       counter: this.state.counter - 1
//     })
//   }

//   render() {
//     const { counter } = this.state;
//     return (
//       <div className={styles.container}>
//         <div className={styles.counter}>Counter: {counter}</div>
//         <button className={styles.button} onClick={this.handleIncrement}>
//           Increment
//         </button>
//         <button className={styles.button} onClick={this.handleDecrement}>
//           Decrement
//         </button>
//       </div>
//     );
//   }
// }




const CounterPage =()=>{
  const [counter,setCounter] = useState(1);

const handleIncrement=()=>{
  setCounter(counter + 1)
}
const handleDecrement=()=>{
  setCounter(counter-1)
}

  return(
    <div className={styles.container}>
        <div className={styles.counter}>Counter: {counter}</div>
        <button className={styles.button} onClick={handleIncrement}>
          Increment
        </button>
        <button className={styles.button} onClick={handleDecrement}>
          Decrement
        </button>
      </div>
  )
}

export default CounterPage;