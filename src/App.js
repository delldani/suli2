import React from "react";
import "./App.css";
import { makeRandomCardsArray, getBackSide } from "./components/utils";
import { Card } from "./components/Card";

const CARDSNUMBER = 8; //csak kettővel osztható lehet, és kevesebb mint 104

const App = () => {
  const [randomCardsArray, setRandomCardsArray] = React.useState(
    makeRandomCardsArray(CARDSNUMBER)
  );
  const clickedFirstCard = React.useRef({
    index: null,
    fileName: null,
  });
  const clickedSecondCard = React.useRef({
    index: null,
    fileName: null,
  });
  const [solved, setSolved] = React.useState(0);
  const wait = React.useRef(false);

  const clearCards = () => {
    clickedSecondCard.current = { index: null, fileName: null };
    clickedFirstCard.current = { index: null, fileName: null };
  };
  React.useEffect(() => {
    if (wait.current) {
      setTimeout(() => {
        const newArray = [...randomCardsArray];
        newArray[clickedSecondCard.current.index].showFigure = false;
        newArray[clickedFirstCard.current.index].showFigure = false;
        clearCards();
        setRandomCardsArray(newArray);
        wait.current = false;
      }, 1500);
    }
  }, [randomCardsArray]);

  const handleClickCard = (index, fileName) => {
    if (
      !wait.current &&
      index !== clickedFirstCard.current.index &&
      randomCardsArray[index].isFound === false
    ) {
      const newArray = [...randomCardsArray];
      if (clickedFirstCard.current.fileName === null) {
        clickedFirstCard.current = { index, fileName };
        newArray[index].showFigure = true;
      } else {
        if (
          clickedFirstCard.current.fileName === fileName &&
          clickedFirstCard.current.index !== index
        ) {
          newArray[index].isFound = true;
          newArray[clickedFirstCard.current.index].isFound = true;
          clearCards();
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
