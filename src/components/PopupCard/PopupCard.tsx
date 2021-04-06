import React, { useState, useRef } from "react";
import "./styles.css";
import Comment from "../Comment";
import { Card } from "../../App";
import { CommentType } from "../../App";

const PopupCard: React.FC<Props> = ({
  card,
  columnTitle,
  closeCard,
  deleteCard,
  deleteAllComments,
  changeDescription,
  comments,
  createComment,
  deleteComment,
  changeTitle,
  changeComment,
  user,
}) => {
  const searchInput = useRef<any>(null);

  function handleFocus() {
    if (searchInput.current !== null) {
      searchInput.current.select();
    }
  }

  const [activeDescriptionInput, setActiveDescriptionInput] = useState(false);
  const handleDescriptionClick = (): void => {
    setActiveDescriptionInput(true);
  };
  const toggleDescriptionInput = (value: boolean): void => {
    setActiveDescriptionInput(value);
  };

  const [activeCommentInput, setActiveCommentInput] = useState(false);
  const handleClick = (): void => {
    setActiveCommentInput(true);
  };
  const toggleCommentInput = (value: boolean): void => {
    setActiveCommentInput(value);
  };

  const handleTitleBlur = (e: any): void => {
    e.target.classList.remove("focused");
  };
  const handleDescriptionBlur = (): void => {
    toggleDescriptionInput(false);
  };

  const [text, setText] = useState("");

  const commentsByCardId = comments.filter(
    (comment) => comment.cardId === card.id
  );

  const clickedParent = () => {
    closeCard(null);
  };
  const clickedChild = () => {};

  return (
    <div className="popup__wrapper" onClick={clickedParent}>
      <div
        className="popup__card"
        onClick={(e) => {
          e.stopPropagation();
          clickedChild();
        }}
      >
        <div className="popup__header">
          <div className="popup__title">
            <div
              onClick={handleFocus}
              onBlur={handleTitleBlur}
              contentEditable={true}
              suppressContentEditableWarning={true}
              onInput={(e) => changeTitle(e.currentTarget.textContent)}
            >
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
            <div>{card.description}</div>
            <div>
              {activeDescriptionInput ? (
                <div>
                  <input
                    defaultValue={card.description}
                    className="focused__description"
                    placeholder="Добавьте подробное описание здесь..."
                    onChange={(e) => changeDescription(e.target.value)}
                    autoFocus
                    ref={searchInput}
                    onBlur={handleDescriptionBlur}
                    onClick={handleFocus}
                  ></input>
                  <button
                    className="popup__input_add_btn"
                    onClick={() => {
                      changeDescription(card.description);
                      toggleDescriptionInput(false);
                    }}
                  >
                    Сохранить
                  </button>
                  <button
                    className="popup__input_del_btn"
                    onClick={() => toggleDescriptionInput(false)}
                  >
                    &#10006;
                  </button>
                </div>
              ) : (
                <input
                  onClick={handleDescriptionClick}
                  className="popup__description_input"
                  placeholder="Добавьте подробное описание здесь..."
                ></input>
              )}
            </div>
          </div>
          <hr></hr>
          <div className="comments__wrapper">
            {activeCommentInput ? (
              <div className="popup__comment_input">
                <input
                  autoFocus
                  className="comments__input focused"
                  placeholder="Напишите комментарий..."
                  onChange={(e) => setText(e.target.value)}
                  onBlur={() => {
                    createComment(text);
                    setText("");
                    toggleCommentInput(false);
                  }}
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
            <div className="comments__container">
              {" "}
              {commentsByCardId &&
                commentsByCardId.map((comment) => {
                  return (
                    <Comment
                      author={comment.author}
                      text={comment.text}
                      key={comment.id}
                      id={comment.id}
                      deleteComment={deleteComment}
                      changeComment={changeComment}
                      user={user}
                    />
                  );
                })}
            </div>
          </div>
        </div>

        <button
          className="popup__card_del_btn"
          onClick={() => {
            deleteCard(card.id);
            deleteAllComments();
            console.log(comments);
          }}
        >
          delete dis card
        </button>
      </div>
    </div>
  );
};

export default PopupCard;

type Props = {
  card: Card;
  comments: Array<CommentType>;
  columnTitle: string;
  closeCard: (arg: any) => void;
  deleteCard: (arg: any) => void;
  deleteAllComments: () => void;
  changeDescription: (description: string) => void;
  createComment: (arg: string) => void;
  deleteComment: (arg: number) => void;
  changeTitle: (args: any) => void;
  changeComment: (text: string, id: number) => void;
  user: string;
};
