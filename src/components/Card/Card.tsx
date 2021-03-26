import React from "react";
import "./styles.css";

type Props = {
  title: string;
  id: number;
  comments: number;
  columnId: number;
  openCard: (arg: any) => void;
  // closeCard: (arg: any) => void;
};

const Card: React.FC<Props> = ({ title, comments, openCard }) => {
  return (
    <button className="card" onClick={() => openCard(title)}>
      <span>{title}</span>
      <div>Комментарии: {comments}</div>
    </button>
  );
};

export default Card;
