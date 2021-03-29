import React, { useState, useEffect } from "react";
import "./styles.css";
import Column from "../Column";
import PopupCard from "../PopupCard";

type Props = {
  user: string;
};

const ColumnList: React.FC<Props> = ({ user }) => {
  const [columns, addColumn] = useState([
    { title: "TODO", columnId: 1 },
    { title: "In Progress", columnId: 2 },
    { title: "Testing", columnId: 3 },
    { title: "Done", columnId: 4 },
  ]);

  // const [title, setColumnTitle] = useState(columnTitle);
  // const changeColumnTitle = (value: string): void => {
  //   setColumnTitle(value);
  // };

  // добавить колонку
  const handleClick = (): void => {
    addColumn((columns) => [
      ...columns,
      { title: "New Column", columnId: columns.length + 1 },
    ]);
  };

  const [card, setCard] = useState(null);
  // открытие закрытие попапа
  const openCard = (value: any) => {
    setCard(value);
    console.log(value);
  };
  const closeCard = () => {
    setCard(null);
  };
  // закрытие попапа по эскейпу
  useEffect(() => {
    const handleEsc = (e: any) => {
      if (e.keyCode === 27) {
        setCard(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="column__list">
      <button className="add__column" onClick={handleClick}>
        add new column
      </button>
      {columns.map((column) => {
        return (
          <Column
            openCard={openCard}
            user={user}
            columnTitle={column.title}
            columnId={column.columnId}
            key={column.columnId}
          />
        );
      })}
      {/* создаем для них общий scope*/}
      {card && (
        <PopupCard card={card} deleteCard={closeCard} closeCard={closeCard} />
      )}
    </div>
  );
};

export default ColumnList;
