import React, { useState } from "react";

import "./styles.css";
import ColumnInput from "../ColumnInput";
import Card from "../Card";
import { CommentType } from "../../App";

const Column: React.FC<Props> = ({
  title,
  id,
  cards,
  openCard,
  createCard,
  changeColumnTitle,
  comments,
}) => {
  const [activeColumnInput, setActiveColumnInput] = useState(false);

  const handleClick = (): void => {
    setActiveColumnInput(true);
  };
  const toggleInput = (value: boolean): void => {
    setActiveColumnInput(value);
  };

  const cardsByColumnId = cards.filter((card) => card.columnId === id);

  const handleFocus = (e: any): void => {
    e.target.classList.add("focused");
  };
  const handleBlur = (e: any): void => {
    e.target.classList.remove("focused");
  };

  return (
    <div className="column">
      <div
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="column__name"
        contentEditable={true}
        suppressContentEditableWarning={true}
        onInput={(e) =>
          changeColumnTitle(e.currentTarget.textContent || "", id)
        }
        defaultValue={title}
      >
        {title}
      </div>
      <div className="card__list">
        {cardsByColumnId.map((card) => {
          return (
            <Card
              card={card}
              openCard={openCard}
              key={card.id + 1}
              comments={comments}
            />
          );
        })}
      </div>
      {activeColumnInput ? (
        <ColumnInput
          id={id}
          createCard={createCard}
          toggleInput={toggleInput}
        />
      ) : (
        <button className="column__button" onClick={handleClick}>
          &#43; Добавить Карточку
        </button>
      )}
    </div>
  );
};

export default Column;

type Props = {
  title: string;
  id: number;
  cards: Array<any>;
  openCard: (arg: any) => void;
  createCard: (title: string, columnId: number) => void;
  changeColumnTitle: (title: string, id: number) => void;
  comments: Array<CommentType>;
};
