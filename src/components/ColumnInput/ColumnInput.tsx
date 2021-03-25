import React, { useState } from "react";
import Column from "../Column/Column";
import "./styles.css";
// import CardList from "../CardList";
import Card from "../Card";

type Props = {
  // id: number;
  columnId: number;
  onClick: (arg: boolean) => void;
};

const ColumnInput: React.FC<Props> = ({ columnId, onClick = () => {} }) => {
  const createCard = () => {
    console.log(`Card created in column ${columnId}`);
  };

  const closeInput = () => {
    onClick(false);
  };

  const [title, setTitle] = useState("Заголовок карточки");

  return (
    <div className="ColumnInput">
      <input
        placeholder="Введите заголовок для карточки"
        onChange={(event) => setTitle(event.target.value)}
      ></input>
      <button className="InputAddBtn" onClick={() => createCard()}>
        {/* раскомменить код ниже и реализовать его работу */}
        {/* <button className="InputAddBtn" onClick={() =>createCard({columnId, title})}> */}
        Добавить
      </button>
      <button className="InputDelBtn" onClick={closeInput}>
        &#10006;
      </button>
    </div>
  );
};

export default ColumnInput;
