import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);
  // let counter = 15;

  const addvalue = () => {
    setCounter(counter + 1);
  };
  const subValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>React course with ibeh</h1>
      <h2>Count Value : {counter}</h2>
      <button onClick={addvalue}>Add value</button>{" "}
      <button onClick={subValue}>Subtract Value</button>
      <p>footer:{counter}</p>
    </>
  );
}

export default App;
