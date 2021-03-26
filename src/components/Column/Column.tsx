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

  const [cards, addCard] = useState([
    {
      title: "заголовоГ",
      description: "описание",
      comments: 2,
      author: user,
      id: 1,
      columnId: 1,
    },
    {
      title: "qweqwe2",
      description: "qweq523we",
      comments: 0,
      author: user,
      id: 2,
      columnId: 2,
    },
    {
      title: "qweqwe4",
      description: "qweqwe",
      comments: 1,
      author: user,
      id: 3,
      columnId: 4,
    },
  ]);

  // const cardToAdd = {
  //   // значение должно прийти из инпута
  //   title: "добавляемая карточка",
  //   // значение придет из активной карточки
  //   description: "описание",
  //   comments: 2,
  //   author: user,
  //   id: cards.length + 1,
  //   columnId: columnId,
  // };

  const createCard = (title: string): void => {
    // console.log(`card added in column ${columnId}`);
    addCard([
      ...cards,
      {
        title,
        description: "описание",
        comments: 1,
        author: user,
        id: cards.length + 1,
        columnId,
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
