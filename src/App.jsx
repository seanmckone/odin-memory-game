import "./App.css";
import img1 from "./assets/images/image1.jpg";
import img2 from "./assets/images/image2.jpg";
import img3 from "./assets/images/image3.jpg";
import img4 from "./assets/images/image4.jpg";
import img5 from "./assets/images/image5.jpg";
import img6 from "./assets/images/image6.jpg";
import img7 from "./assets/images/image7.jpg";
import img8 from "./assets/images/image8.jpg";
import img9 from "./assets/images/image9.jpg";
import img10 from "./assets/images/image10.jpg";
import img11 from "./assets/images/image11.jpg";
import img12 from "./assets/images/image12.jpg";

import { useState, useEffect } from "react";
import Card from "./components/Card";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedIds, setClickedIds] = useState([]);
  const [imageList, setImageList] = useState([
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
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
