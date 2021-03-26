import React, { useState } from "react";
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

  return (
    <div className="App">
      <ColumnList user={userName} openCard={openCard} />
      {/* <PopupCard /> */}
      {card && <PopupCard card={card} />}
    </div>
  );
};

export default App;
