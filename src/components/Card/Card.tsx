import React from "react";
import { Card as CardType } from "../../App";
import "./styles.css";

type Props = {
  openCard: (arg: any) => void;
  card: CardType;
  // card: {} | null;
};

// TODO: допрокидывать сюда остальные данные для попапа
const Card: React.FC<Props> = ({ openCard, card }) => {
  return (
    // TODO: РАЗОБРАТСЬЯ С ТЕМ, КАК ПРОКИДЫВАЕТСЯ title
    <button className="card" onClick={() => openCard(card.id)}>
      <span>{card.title}</span>
      {/* <div>Комментарии: {card.comments.length - 1}</div> */}
    </button>
  );
};

export default Card;
