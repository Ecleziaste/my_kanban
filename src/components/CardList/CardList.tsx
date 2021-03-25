import React, { useState } from "react";
import Card from "../Card";

type Props = {
  columnId: number;
};

const CardList: React.FC<Props> = ({ columnId }) => {
  const [cards, addCard] = useState([
    {
      cardTitle: "заголовок",
      cardId: 1,
      author: "Vasya",
      description: "qweq253we",
      columnId: 1,
    },
    {
      cardTitle: "qweqwe2",
      cardId: 2,
      author: "Vasya",
      description: "qweq523we",
      columnId: 2,
    },
    {
      cardTitle: "qweqwe4",
      cardId: 3,
      author: "Vasya",
      description: "qweqwe",
      columnId: 4,
    },
    {
      cardTitle: "qweqwe5",
      cardId: 4,
      author: "Vasya",
      description: "qwe243qwe",
      columnId: 1,
    },
    {
      cardTitle: "qweqwe6",
      cardId: 5,
      author: "Vasya",
      description: "qwe23qwe",
      columnId: 2,
    },
    {
      cardTitle: "qweqwe8",
      cardId: 6,
      author: "Vasya",
      description: "qwe423qwe",
      columnId: 4,
    },
    {
      cardTitle: "qweqwe10",
      cardId: 7,
      author: "Vasya",
      description: "qw2eqwe",
      columnId: 2,
    },
    {
      cardTitle: "qweqwe11",
      cardId: 8,
      author: "Vasya",
      description: "qwe234qwe",
      columnId: 3,
    },
  ]);

  const cardsByColumnId = cards.filter((card) => card.columnId === columnId);
  return (
    <div className="CardList">
      {cardsByColumnId.map((card) => {
        return (
          <Card
            key={card.cardId}
            cardTitle={card.cardTitle}
            cardId={card.cardId}
          />
        );
      })}
    </div>
  );
};

export default CardList;
