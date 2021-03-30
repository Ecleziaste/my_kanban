import React, { useState } from "react";

import "./styles.css";
import ColumnInput from "../ColumnInput";
import Card from "../Card";

type Props = {
  columnTitle: string;
  columnId: number;
  cards: Array<any>;
  openCard: (arg: any) => void;
  createCard: (title: string, columnId: number, columnTitle: string) => void;
  // changeColumnTitle: (arg: any) => void;

  // comments: number;
};

const Column: React.FC<Props> = ({
  columnTitle,
  columnId,
  cards,
  openCard,
  createCard,
  // changeColumnTitle,
}) => {
  const [activeColumnInput, setActiveColumnInput] = useState(false);
  const handleClick = (): void => {
    setActiveColumnInput(true);
  };

  const toggleInput = (value: boolean): void => {
    setActiveColumnInput(value);
  };

  // изменить имя колонки
  // FIXME: в самой карточке не меняется, только внешне
  const [title, setColumnTitle] = useState(columnTitle);
  const changeColumnTitle = (value: string): void => {
    setColumnTitle(value);
  };

  const cardsByColumnId = cards.filter((card) => card.columnId === columnId);

  return (
    <div className="column">
      <div
        className="column__name"
        contentEditable={true}
        suppressContentEditableWarning={true}
        onChange={(e) =>
          changeColumnTitle((e.target as HTMLTextAreaElement).value)
        }
        // FIXME: fast solution
      >
        {title}
      </div>
      <div className="card__list">
        {cardsByColumnId.map((card) => {
          return <Card card={card} openCard={openCard} key={card.id + 1} />;
        })}
      </div>
      {activeColumnInput ? (
        <ColumnInput
          // onClick={toggleInput}
          columnTitle={columnTitle}
          columnId={columnId}
          createCard={createCard}
          toggleInput={toggleInput}
        />
      ) : (
        <button
          className="column__button"
          onClick={handleClick}
          // почему здесь не работает toggleInput(true)?
        >
          &#43; Добавить Карточку
        </button>
      )}
    </div>
  );
};

export default Column;
