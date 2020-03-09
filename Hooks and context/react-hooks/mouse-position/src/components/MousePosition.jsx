import React from "react";
import styles from "./MousePosition.module.css";
import { useState, useEffect } from "react";

// class MousePosition extends React.Component {
//   state = {
//     position: ""
//   };

//   componentDidMount() {
//     window.addEventListener("mousemove", this.handlePositionChanged);
//   }

//   handlePositionChanged = e => {
//     const x = e.screenX;
//     const y = e.screenY;
//     this.setState({
//       position: `${x} ${y}`
//     });
//   };

//   render() {
//     const { position } = this.state;
//     return <div className={styles.container}>{position}</div>;
//   }
// }

const MousePosition = () => {
  const [position, setPosition] = useState("");

  const handlePositionChanged = e => {
    const x = e.screenX;
    const y = e.screenY;
    setPosition(`${x} ${y}`);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handlePositionChanged);
    return()=>{window.removeEventListener("mousemove", handlePositionChanged);}
  },[]);

  return <div className={styles.container}>{position}</div>;
};

export default MousePosition;
