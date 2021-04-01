import React, { useState } from "react";
import "./styles.css";
import Comment from "../Comment";
import { Card } from "../../App";
import { CommentType } from "../../App";

type Props = {
  card: Card;
  comments: Array<CommentType>;
  columnTitle: string;
  closeCard: (arg: any) => void;
  deleteCard: (arg: any) => void;
  // changeDescription: (arg: string) => void;
  createComment: (arg: string) => void;
  deleteComment: (arg: number) => void;
};

const PopupCard: React.FC<Props> = ({
  card,
  columnTitle,
  closeCard,
  deleteCard,
  // changeDescription,
  comments,
  createComment,
  deleteComment,
}) => {
  const [description, setDescription] = useState(card.description);
  const changeDescription = (value: string): void => {
    setDescription(value);
    card.description = description;
  };
  // логика инпута
  const [activeCommentInput, setActiveCommentInput] = useState(false);
  const handleClick = (): void => {
    setActiveCommentInput(true);
  };
  const toggleCommentInput = (value: boolean): void => {
    setActiveCommentInput(value);
  };
  // стейт текста, который идет в коммент при нажатии на кнопку Добавить
  const [text, setText] = useState("");
  // фильтруем комменты по айди с активной карточкой
  const commentsByCardId = comments.filter(
    (comment) => comment.cardId === card.id
  );

  return (
    <div className="popup__wrapper">
      <div className="popup__card">
        <div className="popup__header">
          <div className="popup__title">
            <div contentEditable={true} suppressContentEditableWarning={true}>
              {card.title}
            </div>
            <div>By {card.author}</div>
            <div> From column '{columnTitle}'</div>
          </div>
          <button
            className="popup__close_card_btn"
            onClick={() => closeCard(null)}
          >
            X
          </button>
        </div>
        <div className="popup__body">
          <div className="popup__description">
            <h4>Description:</h4>
            <div>{description}</div>
            <div>
              <input
                // value={card.description}
                className="popup__description_input"
                placeholder="Добавьте подробное описание здесь..."
                onChange={(e) => changeDescription(e.target.value)}
              ></input>
              <button
                className="popup__input_add_btn"
                onClick={() => changeDescription(description)}
              >
                Добавить
              </button>
              <button
                className="popup__input_del_btn"
                onClick={() => changeDescription("")}
              >
                &#10006;
              </button>
            </div>
          </div>
          <hr></hr>
          <div className="comments__wrapper">
            {activeCommentInput ? (
              <div className="popup__comment_input">
                <input
                  autoFocus
                  className="comments__input"
                  placeholder="Напишите комментарий..."
                  onChange={(e) => setText(e.target.value)}
                ></input>
                <button
                  className="comments__add_btn"
                  onClick={() => {
                    createComment(text);
                    setText("");
                    toggleCommentInput(false);
                  }}
                >
                  Добавить
                </button>
              </div>
            ) : (
              <input
                onClick={handleClick}
                className="popup__comment_input"
                placeholder="Напишите комментарий..."
              ></input>
            )}
            {commentsByCardId &&
              commentsByCardId.map((comment) => {
                return (
                  <Comment
                    author={comment.author}
                    text={comment.text}
                    key={comment.id}
                    id={comment.id}
                    deleteComment={deleteComment}
                  />
                );
              })}
          </div>
        </div>

        <button
          className="popup__card_del_btn"
          onClick={() => deleteCard(card.id)}
        >
          delete dis card
        </button>
      </div>
    </div>
  );
};

export default PopupCard;
