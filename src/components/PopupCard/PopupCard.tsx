import React from "react";
import "./styles.css";

type Props = {
  card: string | null;
  // title: string;
  // id: number;
  // comments: number;
  // columnId: number;
  // openCard: (arg: any) => void;
};

const PopupCard: React.FC<Props> = ({ card }) => {
  return <div className="PopupCard">{card}</div>;
};

export default PopupCard;
