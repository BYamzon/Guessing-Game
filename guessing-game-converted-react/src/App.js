import React, { useState, useRef } from "react";
import "./styles.css";

export default function App() {
  const inputRef = useRef();
  const [number, setNumber] = useState();
  const [hint, setHint] = useState("");

  // const [text, setText] = useState();

  let target = Math.floor(Math.random() * 1000);

  function calc(guess, target) {
    if (guess > 1000 || guess < 0) {
      return "Outside of Range";
    } else if (guess > target) {
      return "Lower please";
    } else if (guess < target) {
      return "Higher please";
    } else {
      return "Congratulations! You guessed it!";
    }
  }
  console.log(target);

  function clickHandle(handleCorrect) {
    let input = number;
    let guess = Number(input);

    if (!Number.isInteger(guess)) {
      setHint("please enter an integer");
    } else {
      let calcHint = calc(guess, target);
      setHint(calcHint);
    }
  }
  function changeTextHandle(e) {
    setNumber(e.target.value);
  }

  return (
    <div className="App">
      <h1>Guessing Game</h1>
      <input
        ref={inputRef}
        onChange={changeTextHandle}
        value={number}
        type="number"
      />
      <button onClick={clickHandle}> Submit </button>
      <h2>Guess a number from 1-1000!</h2>
      <h4> Hint: {hint} </h4>
    </div>
  );
}

// let targetValue = Math.floor(Math.random() * 1000) + 1;
