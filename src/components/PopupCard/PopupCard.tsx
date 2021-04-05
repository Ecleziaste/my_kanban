import React, { useState, useRef } from "react";
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
  deleteComments: () => void;
  storeDescription: (arg: string) => void;
  changeDescription: () => void;
  createComment: (arg: string) => void;
  deleteComment: (arg: number) => void;
};

const PopupCard: React.FC<Props> = ({
  card,
  columnTitle,
  closeCard,
  deleteCard,
  deleteComments,
  storeDescription,
  changeDescription,
  comments,
  createComment,
  deleteComment,
}) => {
  // выделить текст внутри инпута
  const searchInput = useRef<any>(null);
  // FIXME: работает по клику,поавтофокусу - нет
  function handleFocus() {
    if (searchInput.current !== null) {
      // searchInput.current.focus();
      searchInput.current.select();
      // searchInput.current.setSelectionRange(card.description.length, 0);
    }
  }
  // логика инпута описания
  const [activeDescriptionInput, setActiveDescriptionInput] = useState(false);
  const handleDescriptionClick = (): void => {
    setActiveDescriptionInput(true);
  };
  const toggleDescriptionInput = (value: boolean): void => {
    setActiveDescriptionInput(value);
  };
  // // TODO: стейт кнопки "изменить" у описания
  // const [changeDescriptionBtn, setChangeDescriptionBtn] = useState(false);
  // логика инпута коммента
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

  const handleTitleFocus = (e: any): void => {
    e.target.classList.add("focused");
    // e.current.setSelectionRange(0, card.title.length);
    // FIXME: падает из-за селекта! Как иначе выделить весь текст при фокусе/клике на этот див?
    // e.target.select();
  };
  const handleTitleBlur = (e: any): void => {
    e.target.classList.remove("focused");
    changeDescription();
  };

  const handleDescriptionBlur = (): void => {
    changeDescription();
    toggleDescriptionInput(false);
  };

  return (
    <div
      className="popup__wrapper"
      // TODO: сделать закрытие по клику мимо окна, мб отдельный компонент нужен?
      //  onClick={() => closeCard(null)}
    >
      <div className="popup__card">
        <div className="popup__header">
          <div className="popup__title">
            <div
              onFocus={handleTitleFocus}
              onBlur={handleTitleBlur}
              contentEditable={true}
              suppressContentEditableWarning={true}
              onInput={(e) => (card.title = e.currentTarget.textContent || "")}
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
                    onChange={(e) => storeDescription(e.target.value)}
                    autoFocus
                    ref={searchInput}
                    onBlur={handleDescriptionBlur}
                    // FIXME: onFocus не робит
                    // onFocus={handleFocus}
                    onClick={handleFocus}
                  ></input>
                  <button
                    className="popup__input_add_btn"
                    onClick={() => {
                      changeDescription();
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
            deleteComments();
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
