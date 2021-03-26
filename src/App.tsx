import React, { useState, useEffect } from "react";
import "./App.css";
import ColumnList from "./components/ColumnList";
import PopupCard from "./components/PopupCard";

const App = () => {
  // let userName = prompt("Введите имя пользователя", "user");
  const userName = "user";

  const [card, setCard] = useState(null);

  const openCard = (value: any) => {
    setCard(value);
    console.log(value);
  };

  const closeCard = (value: any) => {
    setCard(null);
  };

  useEffect(() => {
    const handleEsc = (e: any) => {
      if (e.keyCode === 27) {
        setCard(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="App">
      <ColumnList user={userName} openCard={openCard} />
      {card && <PopupCard card={card} closeCard={closeCard} />}
    </div>
  );
};

export default App;
