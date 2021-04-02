import React, { useState } from "react";
import "./styles.css";

type Props = {
  author: string;
  text: string;
  id: number;
  deleteComment: (arg: number) => void;
};

const Comment: React.FC<Props> = ({ author, text, id, deleteComment }) => {
  const [changeText, setChangeText] = useState(text);

  // стейт кнопки изменения коммента
  const [changeBtnClicked, setChangeBtn] = useState(false);
  const handleClick = (): void => {
    setChangeBtn(true);
  };
  const toggleChangeInput = (value: boolean): void => {
    setChangeBtn(value);
  };

  return (
    <div className="comment__wrapper">
      {changeBtnClicked ? (
        <div>
          {" "}
          <div>
            <input
              defaultValue={changeText}
              className="focused__description"
              placeholder="Добавьте подробное описание здесь..."
              onChange={(e) => setChangeText(e.target.value)}
              autoFocus
            ></input>
            <button
              className="popup__input_add_btn"
              onClick={() => {
                // changeDescription();
                toggleChangeInput(false);
              }}
            >
              Сохранить
            </button>
            <button
              className="popup__input_del_btn"
              onClick={() => toggleChangeInput(false)}
            >
              &#10006;
            </button>
          </div>
        </div>
      ) : (
        <div>
          {/* {" "} */}
          <div className="comment__content_wrapper">
            <div className="comment__author">{author} said:&nbsp;&nbsp;</div>
            <div className="comment__text">{changeText}</div>
            <div className="comment__buttons_wrapper">
              <button className="comment__change_btn" onClick={handleClick}>
                Change
              </button>
              <button
                className="comment__del_btn"
                onClick={() => deleteComment(id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comment;
