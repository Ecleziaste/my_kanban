import "./App.css";
import React, { useState, useEffect } from "react";
import ColumnList from "./components/ColumnList";
import PopupCard from "./components/PopupCard";

const LocalStorageKeys = {
  cards: "cards",
  comments: "comments",
  user: "user",
};

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
  // TODO:
  const [userName, setUserName] = useState<any>(
    JSON.parse(localStorage.getItem(LocalStorageKeys.user) || "null")
  );
  const askUserName = () => {
    if (userName === null || "") {
      setUserName(prompt("Введите имя пользователя", "User"));
    }
    localStorage.setItem(LocalStorageKeys.user, JSON.stringify(userName));
  };
  askUserName();
  // стейт колонок
  const [columns, setColumns] = useState([
    { title: "TODO", id: 1 },
    { title: "In Progress", id: 2 },
    { title: "Testing", id: 3 },
    { title: "Done", id: 4 },
  ]);
  // стейт карточек
  const [cards, setCards] = useState<Array<Card>>(
    JSON.parse(localStorage.getItem(LocalStorageKeys.cards) || "[]")
  );
  // стейты для попапа
  const [card, setCard] = useState<any>(null);

  const [column, setColumn] = useState<any>(null);
  // стейт для комментов
  const [comments, setComments] = useState<Array<CommentType>>(
    JSON.parse(localStorage.getItem(LocalStorageKeys.comments) || "[]")
  );
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
  // создать новую карточку
  const createCard = (title: string, columnId: number): void => {
    if (title === "" || undefined) {
      alert("карточка нуждается хотя бы в одном символе");
    } else {
      const newCard = {
        title,
        description: "",
        author: userName,
        id: cards.length + 1,
        columnId: columnId,
      };
      setCards([...cards, newCard]);
      localStorage.setItem(
        LocalStorageKeys.cards,
        JSON.stringify([...cards, newCard])
      );
    }
  };
  // удалить карточку
  const deleteCard = (id: number): void => {
    closeCard();
    setCards(cards.filter((filteredCard) => filteredCard.id !== id));
    localStorage.setItem(
      LocalStorageKeys.cards,
      JSON.stringify(cards.filter((filteredCard) => filteredCard.id !== id))
    );
  };
  // удалить комменты с карточкой
  const deleteComments = (): void => {
    setComments(comments.filter((comment) => comment.cardId !== card.id));
  };
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
  // стейт описания
  const [description, setDescription] = useState<any>(null);
  // сохранить описание
  const storeDescription = (value: string): void => {
    setDescription(value);
  };
  // изменить описание
  const changeDescription = (): void => {
    setDescription(card.description);
    return (card.description = description);
  };

  // создать коммент
  const createComment = (text: string): void => {
    if (text === "" || undefined) {
      alert("пустой коммент не будет добавлен");
      // FIXME: введенное значение прошлого коммента сохраняется, если не ввести новое
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
  // удалить коммент
  const deleteComment = (id: number): void => {
    setComments(
      comments.filter((filteredComment) => filteredComment.id !== id)
    );
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
        comments={comments}
      />
      {card && (
        <PopupCard
          comments={comments}
          card={card}
          columnTitle={column.title}
          deleteCard={deleteCard}
          deleteComments={deleteComments}
          closeCard={closeCard}
          storeDescription={storeDescription}
          changeDescription={changeDescription}
          createComment={createComment}
          deleteComment={deleteComment}
        />
      )}
    </div>
  );
};

export default App;
