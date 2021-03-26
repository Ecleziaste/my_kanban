import React from "react";
import "./styles.css";

type Props = {
  card: string | null;
  closeCard: (arg: any) => void;
  // title: string;
  // id: number;
  // comments: number;
  // columnId: number;
  // openCard: (arg: any) => void;
};
const PopupCard: React.FC<Props> = ({ card, closeCard }) => {
  return (
    <div className="PopupCard">
      <div className="PopupHeader">
        <div
          className="PopupTitle"
          contentEditable={true}
          suppressContentEditableWarning={true}
          // FIXME: нужно менять значение в конкретной карточке
        >
          {card}
        </div>
        <button
          className="PopupCloseBtn"
          onClick={() => {
            closeCard(null);
          }}
        >
          X
        </button>
      </div>
      <div className="PopupBody">
        Comments:
        {/* <Comments /> */}
      </div>
      <button className="CardDeleteBtn">DELETE DIS</button>
    </div>
  );
};

export default PopupCard;
