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

export type CommentType = {
  text: string;
  id: number;
  cardId: number;
  author: string;
};

export type Column = {
  title: string;
  id: number;
};

const App = () => {
  // let userName = prompt("Введите имя пользователя", "user");
  const userName = "User";

  const [columns, setColumns] = useState([
    { title: "TODO", id: 1 },
    { title: "In Progress", id: 2 },
    { title: "Testing", id: 3 },
    { title: "Done", id: 4 },
  ]);

  // изменить имя колонки
  const changeColumnTitle = (value: string, id: number): void => {
    const columnsCopy = columns.map((column) => {
      if (column.id === id) {
        column.title = value;
      }
      return column;
    });
    setColumns(columnsCopy);
  };

  // добавить колонку
  const handleClick = (): void => {
    setColumns((columns) => [
      ...columns,
      { title: "New Column", id: columns.length + 1 },
    ]);
  };
  // стейт карточек
  const [cards, setCards] = useState<Array<Card>>([]);
  // создать новую карточку
  const createCard = (title: string, columnId: number): void => {
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

  // стейты для попапа
  const [card, setCard] = useState<any>(null);
  const [column, setColumn] = useState<any>(null);

  // открытие закрытие попапа
  const openCard = (id: number) => {
    const activeCard = cards.find((card) => card.id === id);
    if (activeCard) {
      const activeColumn = columns.find(
        (column) => column.id === activeCard.columnId
      );
      setColumn(activeColumn);
      setCard(activeCard);
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
  // стейт для комментов
  const [comments, setComments] = useState<Array<CommentType>>([]);

  const createComment = (text: string): void => {
    if (text === "" || undefined) {
      alert("пустой коммент не будет добавлен");
    } else {
      setComments([
        ...comments,
        {
          text,
          author: userName,
          id: comments.length + 1,
          cardId: card.id,
        },
      ]);
    }
  };

  return (
    <div className="App">
      <ColumnList
        columns={columns}
        handleClick={handleClick}
        cards={cards}
        openCard={openCard}
        createCard={createCard}
        changeColumnTitle={changeColumnTitle}
      />
      {card && (
        <PopupCard
          comments={comments}
          card={card}
          columnTitle={column.title}
          deleteCard={deleteCard}
          closeCard={closeCard}
          // changeDescription={changeDescription}
          createComment={createComment}
        />
      )}
    </div>
  );
};

export default App;
