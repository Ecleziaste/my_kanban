import React, { useState } from "react";

import "./styles.css";
import ColumnInput from "../ColumnInput";
import Card from "../Card";

type Props = {
  columnTitle: string;
  columnId: number;
  openCard: (arg: any) => void;
  user: string;

  // comments: number;
};

const Column: React.FC<Props> = ({ columnTitle, columnId, user, openCard }) => {
  const [activeColumnInput, setActiveColumnInput] = useState(false);
  const handleClick = (): void => {
    setActiveColumnInput(true);
  };

  const toggleInput = (value: boolean) => {
    setActiveColumnInput(value);
  };

  // FIXME: мб сделать обычный массив и пушить в него?
  const [cards, addCard] = useState([
    {
      title: "единственная карточка в useState, без которой всё ломается",
      description: "описание",
      comments: 2,
      author: user,
      id: 1,
      columnId: 1,
      columnTitle: columnTitle,
    },
  ]);

  const createCard = (title: string): void => {
    console.log(`card added in column ${columnId}`);
    addCard([
      ...cards,
      {
        title,
        description: "описание",
        comments: 1,
        author: user,
        id: cards.length + 1,
        columnId,
        columnTitle: columnTitle,
      },
    ]);
  };

  const cardsByColumnId = cards.filter((card) => card.columnId === columnId);

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

      <div className="CardList">
        {cardsByColumnId.map((card) => {
          return (
            <Card
              // setIsOpenedCard={setIsOpenedCard}
              openCard={openCard}
              key={card.id + 1}
              title={card.title}
              comments={card.comments}
              id={card.id}
              columnId={card.columnId}
            />
          );
        })}
      </div>
      {/* <CardList columnId={columnId} /> */}
      {activeColumnInput ? (
        <ColumnInput onClick={toggleInput} createCard={createCard} />
      ) : (
        <button className="ColumnButton" onClick={handleClick}>
          &#43; Добавить Карточку
        </button>
      )}
    </div>
  );
};

export default Column;
