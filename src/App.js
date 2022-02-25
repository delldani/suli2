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
    index: null,
    fileName: "",
  });
  const clickedSecondCard = React.useRef({
    index: null,
    fileName: "",
  });
  const [solved, setSolved] = React.useState(0);
  const wait = React.useRef(false);

  React.useEffect(() => {
    if (wait.current) {
      setTimeout(() => {
        const newArray = [...randomCardsArray];
        newArray[clickedSecondCard.current.index].showFigure = false;
        newArray[clickedCard.index].showFigure = false;
        clickedSecondCard.current = { index: null, fileName: "" };
        setRandomCardsArray(newArray);
        wait.current = false;
      }, 1500);
      setClickedCard({ index: null, fileName: "" });
    }
  }, [randomCardsArray]);

  const handleClickCard = (index, fileName) => {
    if (!wait.current && index !== clickedCard.index) {
      const newArray = [...randomCardsArray];
      if (clickedCard.fileName === "") {
        setClickedCard({ index, fileName });
        newArray[index].showFigure = true;
      } else {
        if (clickedCard.fileName === fileName && clickedCard.index !== index) {
          newArray[index].isFound = true;
          newArray[clickedCard.index].isFound = true;
          setClickedCard({ index: null, fileName: "" });
          setSolved(solved + 1);
        } else {
          clickedSecondCard.current = { index, fileName };
          newArray[index].showFigure = true;
          wait.current = true;
        }
      }
      setRandomCardsArray(newArray);
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
        show={item.isFound || item.showFigure}
      />
    );
  });

  return (
    <div className="App">
      <div className="table">
        <div className="cards">{cards}</div>
        {solved === cards.length / 2 && <div className="solved">MEGOLDVA</div>}
      </div>
    </div>
  );
};

export default App;
