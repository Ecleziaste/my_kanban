import React, { useState } from "react";

import "./styles.css";
import CardList from "../CardList";
import ColumnInput from "../ColumnInput";

type Props = {
  columnTitle: string;
  columnId: number;
};

const Column: React.FC<Props> = ({ columnTitle, columnId }) => {
  const [activeColumnInput, setActiveColumnInput] = useState(false);
  // const [cards, setCards] = useState([
  //   {
  //     cardTitle: "заголовок",
  //     cardId: 1,
  //     author: "Vasya",
  //     description: "qweq253we",
  //     columnId: 1,
  //   },
  //   {
  //     cardTitle: "qweqwe2",
  //     cardId: 2,
  //     author: "Vasya",
  //     description: "qweq523we",
  //     columnId: 2,
  //   },
  //   {
  //     cardTitle: "qweqwe4",
  //     cardId: 3,
  //     author: "Vasya",
  //     description: "qweqwe",
  //     columnId: 4,
  //   },
  //   {
  //     cardTitle: "qweqwe5",
  //     cardId: 4,
  //     author: "Vasya",
  //     description: "qwe243qwe",
  //     columnId: 1,
  //   },
  //   {
  //     cardTitle: "qweqwe6",
  //     cardId: 5,
  //     author: "Vasya",
  //     description: "qwe23qwe",
  //     columnId: 2,
  //   },
  // ]);
  // // Выносим сюда логику CardList
  // const cardsByColumnId = cards.filter((card) => card.columnId === columnId);

  const handleClick = (): void => {
    setActiveColumnInput(true);
  };
  // const createCard = (card: { columnTitle: string; columnId: number }) => {
  //   setCards([...cards, card]);
  // };
  return (
    <div className="Column">
      <div
        className="ColumnName"
        contentEditable={true}
        suppressContentEditableWarning={true}
        // FIXME: fast solution
      >
        {columnTitle}
      </div>

      <CardList columnId={columnId} />

      {activeColumnInput ? (
        <ColumnInput columnId={columnId} onClick={setActiveColumnInput} />
      ) : (
        <button className="ColumnButton" onClick={handleClick}>
          &#43; Добавить Карточку
        </button>
      )}
    </div>
  );
};

export default Column;
