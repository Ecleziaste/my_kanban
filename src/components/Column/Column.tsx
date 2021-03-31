import React, { useState } from "react";

import "./styles.css";
import ColumnInput from "../ColumnInput";
import Card from "../Card";

type Props = {
  title: string;
  id: number;
  cards: Array<any>;
  openCard: (arg: any) => void;
  createCard: (title: string, columnId: number) => void;
  changeColumnTitle: (title: string, id: number) => void;
  // comments: number;
};

const Column: React.FC<Props> = ({
  title,
  id,
  cards,
  openCard,
  createCard,
  changeColumnTitle,
}) => {
  const [activeColumnInput, setActiveColumnInput] = useState(false);
  // const divRef = useRef(null);
  const handleClick = (): void => {
    setActiveColumnInput(true);
  };

  const toggleInput = (value: boolean): void => {
    setActiveColumnInput(value);
  };

  const cardsByColumnId = cards.filter((card) => card.columnId === id);

  return (
    <div className="column">
      <div
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
          return <Card card={card} openCard={openCard} key={card.id + 1} />;
        })}
      </div>
      {activeColumnInput ? (
        <ColumnInput
          // onClick={toggleInput}
          id={id}
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
