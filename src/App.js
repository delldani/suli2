import "./App.css";
import { makeRandomCardsArray } from "./components/utils";
import { Card } from "./components/Card";

const CARDSNUMBER = 8; //csak kettővel osztható lehet, és kevesebb

function App() {
  console.log(makeRandomCardsArray(CARDSNUMBER));
  const fileName = "card-clubs-5.png";

  const cards = makeRandomCardsArray(CARDSNUMBER).map((fileName, index) => {
    return <Card fileName={`cards/${fileName}.png`} key={index} />;
  });
  return (
    <div className="App">
      <div className="table">
        <div className="cards">
          {cards}
          {/* <Card fileName={`cards/${fileName}`} /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
