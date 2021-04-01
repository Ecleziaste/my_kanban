import React from "react";
import { Card as CardType } from "../../App";
import "./styles.css";
import { CommentType } from "../../App";

type Props = {
  openCard: (id: number) => void;
  card: CardType;
  comments: Array<CommentType>;
};

const Card: React.FC<Props> = ({ openCard, card, comments }) => {
  const commentsCount = comments.filter(
    (comment) => comment.cardId === card.id
  );
  console.log(commentsCount);
  return (
    <button className="card" onClick={() => openCard(card.id)}>
      <div>{card.title}</div>
      <span>Комментарии:&nbsp;{commentsCount.length}</span>
    </button>
  );
};

export default Card;
