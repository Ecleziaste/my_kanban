import "./App.css";
import React, { useState, useEffect } from "react";
import ColumnList from "./components/ColumnList";
import PopupCard from "./components/PopupCard";

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

  const [cards, setCards] = useState([
    {
      title: "Это ПРОТОКАРТОЧКА",
      description: "... описание ...",
      comments: ["0"],
      author: userName,
      id: 1,
      columnId: 0,
      columnTitle: "заголовок колонки",
    },
  ]);
  // создать новую карточку
  const createCard = (
    title: string,
    columnId: number,
    columnTitle: string
  ): void => {
    setCards([
      ...cards,
      {
        title,
        description: "... описание ...",
        comments: ["0"],
        author: userName,
        id: cards.length + 1,
        columnId: columnId,
        columnTitle: columnTitle,
      },
    ]);
  };
  // удалить карточку
  const deleteCard = (id: number): void => {
    closeCard();
    setCards(cards.filter((filteredCard) => filteredCard.id !== id));
    console.log(id);
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
