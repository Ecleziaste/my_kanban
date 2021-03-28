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

  const toggleInput = (value: boolean): void => {
    setActiveColumnInput(value);
  };

  // useEffect(() => {}, []);

  // FIXME: мб сделать обычный массив и пушить в него?
  const [cards, setCards] = useState([
    {
      title: "1ая карточка(без единой карточки в useState всё ломается)",
      description: "... описание ...",
      comments: ["0"],
      author: user,
      id: 1,
      columnId: 1,
      columnTitle: columnTitle,
    },
    {
      title: "2ая карточка ",
      description: "... описание ...",
      comments: ["0"],
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
        description: "... описание ...",
        comments: ["0"],
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
          return <Card card={card} openCard={openCard} key={card.id + 1} />;
        })}
      </div>
      {activeColumnInput ? (
        <ColumnInput
          // onClick={toggleInput}
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
