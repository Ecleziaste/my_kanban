import React from "react";
import "./styles.css";

type Props = {
  cardTitle: string;
  cardId: number;
  // comments: number;
};

const Card: React.FC<Props> = ({ cardTitle }) => {
  // const cardsById = cards.filter((card) => card.cardId === cardId);
  return (
    <div className="Card">
      <span>{cardTitle}</span>
      <div>Число комментов</div>
    </div>
  );
};

export default Card;
