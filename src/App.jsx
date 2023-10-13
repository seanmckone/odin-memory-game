import "./App.css";

import { useState, useEffect } from "react";
import Card from "./components/Card";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedIds, setClickedIds] = useState([]);
  const [imageList, setImageList] = useState([
    "./src/assets/images/image1.jpg",
    "./src/assets/images/image2.jpg",
    "./src/assets/images/image3.jpg",
    "./src/assets/images/image4.jpg",
    "./src/assets/images/image5.jpg",
    "./src/assets/images/image6.jpg",
    "./src/assets/images/image7.jpg",
    "./src/assets/images/image8.jpg",
    "./src/assets/images/image9.jpg",
    "./src/assets/images/image10.jpg",
    "./src/assets/images/image11.jpg",
    "./src/assets/images/image12.jpg",
  ]);

  useEffect(() => {
    const shuffledImages = shuffleArray([...imageList]);
    setImageList(shuffledImages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function shuffleArray(array) {
    for (var i = 0; i < array.length; i++)
      array.splice(Math.round(Math.random() * i), 0, array.pop());

    return array;
  }

  function handleClick(id) {
    if (clickedIds.includes(id)) {
      if (score > highScore) {
        setHighScore(score);
      }

      setScore(0);
      setClickedIds([]);
    } else {
      setClickedIds([...clickedIds, id]);
      setScore((score) => score + 1);
    }
    const shuffledImages = shuffleArray([...imageList]);
    setImageList(shuffledImages);
  }

  return (
    <div className="app">
      <div className="title">
        <h1 className="app-title">Memory Game</h1>
        <div className="score">
          <h2 className="score-display">Score: {score}</h2>
          <h2 className="high-score-display">High Score: {highScore}</h2>
        </div>
      </div>
      <div className="card-area">
        {imageList.map((image) => {
          return (
            <Card
              key={image}
              image={image}
              onClick={() => handleClick(image)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
