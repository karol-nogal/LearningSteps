import React, { useState } from "react";
import styles from "./App.module.css";
import MousePosition from "./components/MousePosition";

function App() {
  const [visible, setVisible] = useState(false);

  const handleShowField = () => {
    setVisible(true);
  };

  const handleHideField = () => {
    setVisible(false);
  };

  return (
    <div>
      <div className={styles.buttonsContainer}>
        {!visible && (
          <button onClick={handleShowField}>Track mouse position</button>
        )}
        {visible && <button onClick={handleHideField}>Stop</button>}
      </div>
      <div>{visible && <MousePosition />}</div>
    </div>
  );
}

export default App;
