import {useEffect, useRef, useState } from "react";
import "./App.css";
import Nav from "./component/Nav";

function App() {
  const words = [
    "apple",
    "banana",
    "cherry",
    "dog",
    "elephant",
    "frog",
    "grape",
    "house",
    "igloo",
    "jacket",
  ];
  let randomIndex = Math.floor(Math.random() * words.length);
  let word = () => words[randomIndex];
  const [level, setLevel] = useState("normal");
  const [time, setTime] = useState(30);
  const [scroll, setScroll] = useState(0);
  const [randomWord, setRandomWord] = useState(word);
  const inputWordRef = useRef();

  const boxStartGame = (
    <div className="box">
      <div className="header">
        <h1>เกมพิมพ์เร็ว | Speed Typing</h1>
      </div>
      <div className="time-scroll">
        <span>เวลา {time} วินาที</span>
        <span>{scroll} คะแนน</span>
      </div>
      <div className="random-word">
        <h1>{randomWord}</h1>
      </div>
      <div className="form">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            ref={inputWordRef}
            placeholder="ป้อนคำที่คุณเห็น"
          />
        </form>
      </div>
    </div>
  );
  const boxEndGame = (
    <div className="box">
        <div className="header-end">
          <h1>จบเกมแล้วครับ</h1>
          <p>คะแนนของคุณคือ = {scroll} แต้ม</p>
        </div>
        <button className="play-again" onClick={playAgain}>เล่นอีกครั้ง</button>
      </div>
  )
  const checkEndGame = time === 0 ? boxEndGame : boxStartGame; 
  const oLevel = { level, setLevel};

  function playAgain(){
    if (level === "easy") {
      setTime(60);
    } else if (level === "normal") {
      setTime(30);
    } else {
      setTime(15);
    }
    setScroll(0);   
    setRandomWord(word);

  }
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0) {
        setTime(time - 1);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [time]);


  useEffect(() => {
    if (level === "easy") {
      setTime(60);
    } else if (level === "normal") {
      setTime(30);
    } else {
      setTime(15);
    }
    setScroll(0);
    }, [level]);

  function handleSubmit(event) {
    event.preventDefault();
    if (inputWordRef.current.value === randomWord) {
      setScroll(scroll + 10);
      setRandomWord(word);
    }
    inputWordRef.current.value = "";
  }

  return (
    <>
      <Nav setLevel={oLevel}></Nav>
      {checkEndGame}
    </>
  );
}

export default App;
