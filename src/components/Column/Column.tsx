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

const comments: number = 0;

const Column: React.FC<Props> = ({ columnTitle, columnId, user, openCard }) => {
  const [activeColumnInput, setActiveColumnInput] = useState(false);
  const handleClick = (): void => {
    setActiveColumnInput(true);
  };

  const toggleInput = (value: boolean) => {
    setActiveColumnInput(value);
  };

  // FIXME: мб сделать обычный массив и пушить в него?
  const [cards, setCards] = useState([
    {
      title: "единственная карточка в useState, без которой всё ломается",
      description: "описание",
      comments: 2,
      author: user,
      id: 1,
      columnId: 1,
      columnTitle: columnTitle,
    },
    {
      title: "2ая карточка ",
      description: "описание",
      comments: 1 + (comments || 0),
      author: user,
      id: 2,
      columnId: 2,
      columnTitle: columnTitle,
    },
  ]);

  const createCard = (title: string): void => {
    setCards([
      ...cards,
      {
        title,
        description: "описание",
        comments: 0 + (comments || 0),
        author: user,
        id: cards.length + 1,
        columnId,
        columnTitle: columnTitle,
      },
    ]);
  };

  const cardsByColumnId = cards.filter((card) => card.columnId === columnId);

  return (
    <div className="column">
      <div
        className="column__name"
        contentEditable={true}
        suppressContentEditableWarning={true}
        // FIXME: fast solution
      >
        {columnTitle}
      </div>

      <div className="card__list">
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
        <button className="column__button" onClick={handleClick}>
          &#43; Добавить Карточку
        </button>
      )}
    </div>
  );
};

export default Column;
