import React, { useState } from "react";
import Card from "../Card";

type Props = {
  columnId: number;
  // cardTitle: string;
  // cardId: number;
  // onClick: (args: { cardTitle: string; cardId: number }) => void;
};

const CardList: React.FC<Props> = ({ columnId }) => {
  const [cards, addCard] = useState([
    {
      cardTitle: "заголовок",
      cardId: 1,
      author: "Vasya",
      description: "описание",
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
      cardTitle: "qweqwe6",
      cardId: 5,
      author: "Vasya",
      description: "qwe23qwe",
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
