import React from "react";
import "./styles.css";

type Props = {
  openCard: (arg: any) => void;
  card: any;
  // card: {} | null;
};

// TODO: допрокидывать сюда остальные данные для попапа
const Card: React.FC<Props> = ({ openCard, card }) => {
  return (
    // TODO: РАЗОБРАТСЬЯ С ТЕМ, КАК ПРОКИДЫВАЕТСЯ title
    <button className="card" onClick={() => openCard(card)}>
      <span>{card.title}</span>
      <div>Комментарии: {card.comments.length - 1}</div>
    </button>
  );
};

export default Card;
