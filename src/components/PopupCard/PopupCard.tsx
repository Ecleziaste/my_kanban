import React from "react";
import "./styles.css";
import Comments from "../Comments";

type Props = {
  card: any;
  // card: {} | null;
  closeCard: (arg: any) => void;
  deleteCard: (arg: any) => void;
};

const PopupCard: React.FC<Props> = ({ card, closeCard, deleteCard }) => {
  // const commentsByCardId = comments.filter((comment) => comments.id === id);

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
            {card.title} created by {card.author} from column {card.columnTitle}
          </div>
          <button
            className="popup__closeCardBtn"
            onClick={() => closeCard(null)}
          >
            X
          </button>
        </div>
        <div className="popup__body">
          <div className="popup__description">
            <h4>Description:</h4>
            <div>{card.description}</div>
            <input
              className="popup__description_input"
              placeholder="Добавьте подробное описание здесь..."
            ></input>
          </div>
          <hr></hr>
          <input
            className="popup__comment_input"
            placeholder="Место для вашего комментария..."
          ></input>
          List of comments:
          {/* {commentsByCardId.map((comment) => {
            return <Comments />;
          })} */}
          <Comments />
        </div>
        <button
          className="popup__cardDeleteBtn"
          onClick={() => deleteCard(card.id)}
        >
          delete dis card
        </button>
      </div>
    </div>
  );
};

export default PopupCard;
