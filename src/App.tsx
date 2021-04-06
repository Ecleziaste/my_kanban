import "./App.css";
import React, { useState, useEffect } from "react";
import ColumnList from "./components/ColumnList";
import PopupCard from "./components/PopupCard";
import { v4 as uuidv4 } from "uuid";

const COLUMNS = [
  { title: "TODO", id: 1 },
  { title: "In Progress", id: 2 },
  { title: "Testing", id: 3 },
  { title: "Done", id: 4 },
];

const LocalStorageKeys = {
  user: "user",
  columns: "columns",
  cards: "cards",
  comments: "comments",
};

const setLocalStorageColumns = () => {
  const columns = localStorage.getItem(LocalStorageKeys.columns);
  if (!columns) {
    localStorage.setItem(LocalStorageKeys.columns, JSON.stringify(COLUMNS));
  }
};

const App = () => {
  setLocalStorageColumns();

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

  const [columns, setColumns] = useState<Array<{ id: number; title: string }>>(
    JSON.parse(localStorage.getItem(LocalStorageKeys.columns) || `${COLUMNS}`)
  );

  const [cards, setCards] = useState<Array<Card>>(
    JSON.parse(localStorage.getItem(LocalStorageKeys.cards) || "[]")
  );

  const [comments, setComments] = useState<Array<CommentType>>(
    JSON.parse(localStorage.getItem(LocalStorageKeys.comments) || "[]")
  );

  const [card, setCard] = useState<any>(null);
  const [column, setColumn] = useState<any>(null);

  const changeTitle = (title: string): void => {
    card.title = title;
    const newCards = cards.map((c) => {
      if (c.id === card.id) {
        return card;
      }
      return c;
    });
    localStorage.setItem(LocalStorageKeys.cards, JSON.stringify(newCards));
  };

  const changeComment = (text: string, id: number): void => {
    const comment: any = comments.find(
      (filteredComment) => filteredComment.id === id
    );
    comment.text = text;
    const newComments = comments.map((c) => {
      if (c.id === comment.id) {
        return comment;
      }
      return c;
    });
    setComments(newComments);

    localStorage.setItem(
      LocalStorageKeys.comments,
      JSON.stringify(newComments)
    );
  };

  const changeColumnTitle = (value: string, id: number): void => {
    const columnsCopy = columns.map((column: any) => {
      if (column.id === id) {
        column.title = value;
      }
      return column;
    });
    setColumns(columnsCopy);
    localStorage.setItem(LocalStorageKeys.columns, JSON.stringify(columnsCopy));
  };

  const handleClick = (): void => {
    setColumns((columns: any) => [
      ...columns,
      { title: "New Column", id: columns.length + 1 },
    ]);
  };

  const createCard = (title: string, columnId: number): void => {
    if (title === "" || undefined) {
      alert("карточка нуждается хотя бы в одном символе");
    } else {
      const newCard = {
        title,
        description: "",
        author: userName,
        id: uuidv4(),
        columnId,
      };
      setCards([...cards, newCard]);
      localStorage.setItem(
        LocalStorageKeys.cards,
        JSON.stringify([...cards, newCard])
      );
    }
  };

  const deleteCard = (id: number): void => {
    closeCard();
    setCards(cards.filter((filteredCard) => filteredCard.id !== id));
    localStorage.setItem(
      LocalStorageKeys.cards,
      JSON.stringify(cards.filter((filteredCard) => filteredCard.id !== id))
    );
  };

  const deleteAllComments = (): void => {
    setComments(comments.filter((comment) => comment.cardId !== card.id));
    localStorage.setItem(
      LocalStorageKeys.comments,
      JSON.stringify(
        comments.filter((filteredComment) => filteredComment.cardId !== card.id)
      )
    );
  };

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

  useEffect(() => {
    const handleEsc = (e: any) => {
      if (e.keyCode === 27) {
        setCard(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const changeDescription = (description: string): void => {
    card.description = description;
    const newCards = cards.map((c) => {
      if (c.id === card.id) {
        return card;
      }
      return c;
    });
    localStorage.setItem(LocalStorageKeys.cards, JSON.stringify(newCards));
  };

  const createComment = (text: string): void => {
    if (text === "" || undefined) {
      alert("пустой коммент не будет добавлен");
    } else {
      const newComment = {
        text,
        author: userName,
        id: uuidv4(),
        cardId: card.id,
      };
      setComments([...comments, newComment]);
      localStorage.setItem(
        LocalStorageKeys.comments,
        JSON.stringify([...comments, newComment])
      );
    }
  };

  const deleteComment = (id: number): void => {
    setComments(
      comments.filter((filteredComment) => filteredComment.id !== id)
    );
    localStorage.setItem(
      LocalStorageKeys.comments,
      JSON.stringify(
        comments.filter((filteredComment) => filteredComment.id !== id)
      )
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
          deleteAllComments={deleteAllComments}
          closeCard={closeCard}
          changeDescription={changeDescription}
          createComment={createComment}
          deleteComment={deleteComment}
          changeTitle={changeTitle}
          changeComment={changeComment}
          user={userName}
        />
      )}
    </div>
  );
};

export default App;

export type Card = {
  title: string;
  description: string;
  author: string;
  id: any;
  columnId: number;
};

export type CommentType = {
  text: string;
  id: any;
  cardId: any;
  author: string;
};

export type Column = {
  title: string;
  id: number;
};
