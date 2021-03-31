import React from "react";
import { Card as CardType } from "../../App";
import "./styles.css";

type Props = {
  openCard: (id: number) => void;
  card: CardType;
};

const Card: React.FC<Props> = ({ openCard, card }) => {
  return (
    <button className="card" onClick={() => openCard(card.id)}>
      <span>{card.title}</span>
    </button>
  );
};

export default Card;
