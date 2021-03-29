import React, { useState } from "react";

import "./styles.css";
import ColumnInput from "../ColumnInput";
import Card from "../Card";

type Props = {
  columnTitle: string;
  columnId: number;
  user: string;
  openCard: (arg: any) => void;
  // changeColumnTitle: (arg: any) => void;

  // comments: number;
};

const Column: React.FC<Props> = ({
  columnTitle,
  columnId,
  user,
  openCard,
  // changeColumnTitle,
}) => {
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
      columnTitle,
    },
  ]);
  // создать новую карточку
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
        columnTitle,
      },
    ]);
  };
  // удалить карточку
  const deleteCard = (id: number): void => {
    setCards(cards.filter((card) => card.id === card.id));
    console.log(id);
  };

  // изменить имя колонки
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
