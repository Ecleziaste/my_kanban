import React, { useState } from "react";
import "./styles.css";

type Props = {
  columnId: number;
  onClick: (arg: boolean) => void;
};

const ColumnInput: React.FC<Props> = ({ columnId, onClick = () => {} }) => {
  // let cardTitle = setTitle();
  const cardTitle = "Z";
  function createCard(cardTitle: string) {
    console.log(`Card created in column ${columnId} with title ${cardTitle}`);
  }

  const closeInput = () => {
    onClick(false);
  };
  // let чтобы инпут работал
  const [title, setTitle] = useState("Заголовок карточки");

  return (
    <div className="ColumnInput">
      <input
        placeholder="Введите заголовок для карточки"
        onChange={
          (event) => {
          setTitle(event.target.value);
          // cardTitle = event.target.value;
          console.log(event.target.value);
        }}
      ></input>
      <button className="InputAddBtn" onClick={() => createCard(cardTitle)}>
        {/* раскомменить код ниже и реализовать его работу */}
        {/* <button
        className="InputAddBtn"
        onClick={() => createCard({ columnId, cardTitle, cardId })}
      > */}
        Добавить
      </button>
      <button className="InputDelBtn" onClick={closeInput}>
        &#10006;
      </button>
    </div>
  );
};

export default ColumnInput;
