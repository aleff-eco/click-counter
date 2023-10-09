import "./App.css";
import clickCounterLogo from "./imagenes/click-icon.png";
import Button from "./components/Button";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [clickNumber, setClickNumber] = useState(0);

  const clickEvent = () => {
    setClickNumber(clickNumber + 1);
  };

  const restartEvent = () => {
    setClickNumber(0);
  };

  return (
    <div className="App">
      <div className="counter-container">
        <div className="click-logo-container">
          <img
            className="click-logo"
            src={clickCounterLogo}
            alt="click counter icon"
          ></img>
        </div>
        <div className="counter-text-container">
          <Counter clickNumber={clickNumber} />
        </div>
        <div className="principal-container">
          <Button text="Click" clickButton={true} clickManagment={clickEvent} />
          <Button
            text="Restart"
            clickButton={false}
            clickManagment={restartEvent}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
