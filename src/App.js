import "./App.css";
import { makeRandomCardsArray, getBackSide } from "./components/utils";
import { Card } from "./components/Card";

const CARDSNUMBER = 8; //csak kettővel osztható lehet, és kevesebb

function App() {
  const cards = makeRandomCardsArray(CARDSNUMBER).map((fileName, index) => {
    const backSide = getBackSide(fileName);
    return (
      <Card
        fileName={`cards/${fileName}.png`}
        backSide={`cards/card-back${backSide}.png`}
        key={index}
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
