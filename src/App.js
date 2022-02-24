import React from "react";
import "./App.css";
import { makeRandomCardsArray, getBackSide } from "./components/utils";
import { Card } from "./components/Card";

const CARDSNUMBER = 8; //csak kettővel osztható lehet, és kevesebb mint 104

const App = () => {
  const [randomCardsArray, setRandomCardsArray] = React.useState(
    makeRandomCardsArray(CARDSNUMBER)
  );
  const [clickedCard, setClickedCard] = React.useState({
    index: 0,
    fileName: "",
  });
  const clickedSecondCard = React.useRef({
    index: 0,
    fileName: "",
  });

  const wait = React.useRef(false);

  React.useEffect(() => {
    if (wait.current) {
      setTimeout(() => {
        const newArray2 = [...randomCardsArray];
        newArray2[clickedSecondCard.current.index].showFigure = false;
        newArray2[clickedCard.index].showFigure = false;
        clickedSecondCard.current = { index: 0, fileName: "" };
        setRandomCardsArray(newArray2);
      }, 2000);
      setClickedCard({ index: 0, fileName: "" });
      wait.current = false;
    }
  }, [randomCardsArray]);

  const handleClickCard = (index, fileName) => {
    if (clickedCard.fileName === "") {
      setClickedCard({ index, fileName });
      const newArray = [...randomCardsArray];
      newArray[index].showFigure = true;
      setRandomCardsArray(newArray);
    } else {
      if (clickedCard.fileName === fileName && clickedCard.index !== index) {
        const newArray = [...randomCardsArray];
        newArray[index].isFound = true;
        newArray[clickedCard.index].isFound = true;
        setRandomCardsArray(newArray);
        setClickedCard({ index: 0, fileName: "" });
      } else {
        clickedSecondCard.current = { index, fileName };
        const newArray = [...randomCardsArray];
        newArray[index].showFigure = true;
        wait.current = true;
        setRandomCardsArray(newArray);
      }
    }
  };

  const cards = randomCardsArray.map((item, index) => {
    const backSide = getBackSide(item.name);
    return (
      <Card
        fileName={`cards/${item.name}.png`}
        backSide={`cards/card-back${backSide}.png`}
        key={index}
        index={index}
        handleClickCard={handleClickCard}
        show={item.isFound ? true : item.showFigure}
      />
    );
  });

  return (
    <div className="App">
      <div className="table">
        <div className="cards">{cards}</div>
      </div>
    </div>
  );
};

export default App;
