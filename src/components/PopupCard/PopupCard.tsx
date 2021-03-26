import React from "react";
import "./styles.css";

type Props = {
  // card: {};
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
    <div className="popup__wrapper">
      <div className="popup__card">
        <div className="popup__header">
          <div
            className="popup__title"
            contentEditable={true}
            suppressContentEditableWarning={true}
            // FIXME: нужно менять значение в конкретной карточке
          >
            {card} from column ...
          </div>
          <button
            className="popup__closeBtn"
            onClick={() => {
              closeCard(null);
            }}
          >
            X
          </button>
        </div>
        <div className="popup__description">... card description ...</div>
        <div className="popup__body">
          List of comments:
          {/* <Comments /> */}
        </div>
        <button className="popup__cardDeleteBtn">delete dis card</button>
      </div>
    </div>
  );
};

export default PopupCard;
