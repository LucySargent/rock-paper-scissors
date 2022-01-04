// import './App.css';
import React, { useState } from "react";
import PlayerButton from "./components/Player";

const objects = ["rock", "scissors", "paper"];

function App() {
  //points
  // const [points, setPoints] = useState(0);
  // const [pointsTwo, setPointsTwo] = useState(0);
  //result
  const [object, setObject] = useState("");
  const getRandomResult = () =>
    objects[Math.floor(Math.random() * objects.length)];

  const [objectTwo, setObjectTwo] = useState("");
  const [winner, setWinner] = useState("");

  const handleState = (stateFn) => {
    const randomResult = getRandomResult();
    stateFn(randomResult);
    return randomResult;
  };

  const winnerButton = () => {
    console.log("I win");
    if (object === "rock" && objectTwo === "scissors") {
      setWinner("Player 1 wins");
      // setPoints(score + 1);
    } else if (object === "rock" && objectTwo === "paper") {
      setWinner("Player 1 wins");
      // setScore(score - 1);
    } else if (object === "scissors" && objectTwo === "paper") {
      setWinner("Player 1 wins");
      // setScore(score + 1);
    } else if (object === "scissors" && objectTwo === "rock") {
      setWinner("Player 1 wins");
      // setScore(score - 1);
    } else if (object === "paper" && objectTwo === "rock") {
      setWinner("Player 1 wins");
      // setScore(score + 1);
    } else if (object === "paper" && objectTwo === "scissors") {
      setWinner("Player 2 wins");
      // setScore(score - 1);
    } else {
      setWinner("draw");
    }
  };


return (
  <div>
    <h1>Rock, Paper, Scissors!</h1>
    <div>
      <PlayerButton update={handleState} stateFn={setObject}></PlayerButton>
      {object}
    </div>
    <div>
      <PlayerButton update={handleState} stateFn={setObjectTwo}></PlayerButton>
      {objectTwo}
    </div>
    <div>
      <button onClick={winnerButton}>Find out who won!</button>
    </div>
    <div>
    {winner}

    </div>
  </div>
);
}

export default App;
