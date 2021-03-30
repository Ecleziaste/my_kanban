import "./App.css";
import React, { useState, useEffect } from "react";
import ColumnList from "./components/ColumnList";
import PopupCard from "./components/PopupCard";

export type Card = {
  title: string;
  description: string;
  author: string;
  id: number;
  columnId: number;
};

const App = () => {
  // let userName = prompt("Введите имя пользователя", "user");
  const userName = "User";

  const [columns, addColumn] = useState([
    { columnTitle: "TODO", columnId: 1 },
    { columnTitle: "In Progress", columnId: 2 },
    { columnTitle: "Testing", columnId: 3 },
    { columnTitle: "Done", columnId: 4 },
  ]);

  // добавить колонку
  const handleClick = (): void => {
    addColumn((columns) => [
      ...columns,
      { columnTitle: "New Column", columnId: columns.length + 1 },
    ]);
  };

  const [cards, setCards] = useState<Array<Card>>([]);
  // создать новую карточку
  const createCard = (
    title: string,
    columnId: number,
    columnTitle: string
  ): void => {
    if (title === "" || undefined) {
      alert("карточка нуждается хотя бы в одном символе");
    } else {
      setCards([
        ...cards,
        {
          title,
          description: "",
          author: userName,
          id: cards.length + 1,
          columnId: columnId,
        },
      ]);
    }
  };
  // удалить карточку
  const deleteCard = (id: number): void => {
    closeCard();
    setCards(cards.filter((filteredCard) => filteredCard.id !== id));
  };

  const [card, setCard] = useState<any>(null);
  // открытие закрытие попапа
  const openCard = (id: number) => {
    const activeCard = cards.find((card) => card.id === id);
    if (activeCard) {
      const activeColumn = columns.filter(
        (column) => column.columnId === activeCard.columnId
      );
      setCard(activeCard);
      // setColumn(activeColumn);
      console.log(id);
    }
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
    <div className="App">
      <ColumnList
        columns={columns}
        user={userName}
        handleClick={handleClick}
        cards={cards}
        openCard={openCard}
        createCard={createCard}
      />
      {card && (
        <PopupCard card={card} deleteCard={deleteCard} closeCard={closeCard} />
      )}
    </div>
  );
};

export default App;
