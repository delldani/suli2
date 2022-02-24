import "./App.css";
import { makeRandomCardsArray, getBackSide } from "./components/utils";
import { Card } from "./components/Card";

const CARDSNUMBER = 8; //csak kettővel osztható lehet, és kevesebb mint 104

function App() {
  const cards = makeRandomCardsArray(CARDSNUMBER).map((fileName, index) => {
    const backSide = getBackSide(fileName);
    return (
      <Card
        fileName={`cards/${fileName}.png`}
        backSide={`cards/card-back${backSide}.png`}
        key={index}
        setShow={() => {}}
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
}

export default App;
