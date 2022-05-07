import React from "react";
import { useHistory } from "react-router-dom";
export default function Footer() {

  // Get the history object
  const history = useHistory();
  const goBack = () => {
    // imperatively redirect back
      history.goBack();
  }

  const goForward = () => {
    // imperatively redirect forward
    history.goForward();
  }

  const go = () => {
    history.go(-2);
  }

  return (
    <footer>
      <button onClick={goBack}>Back</button>
      <button onClick={goForward}>Forward</button>
      <button onClick={go}>Go back 2 pages</button>
    </footer>
  );
}
