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
  const handleClick = (): void => {
    setActiveColumnInput(true);
  };

  // // Выносим сюда логику CardList
  // const cardsByColumnId = cards.filter((card) => card.columnId === columnId);

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
