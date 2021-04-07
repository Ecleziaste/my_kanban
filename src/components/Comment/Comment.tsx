import React, { useState } from "react";
import "./styles.css";

const Comment: React.FC<Props> = ({
  author,
  text,
  id,
  deleteComment,
  changeComment,
  user,
}) => {
  const [changeText, setChangeText] = useState(text);

  const [changeBtnClicked, setChangeBtn] = useState(false);

  const toggleChangeInput = (value: boolean): void => {
    setChangeBtn(value);
  };

  const handleChangeClick = (): void => {
    if (user === author) {
      toggleChangeInput(true);
    } else {
      alert("U are not able to change this comment");
    }
  };

  const handleDeleteClick = (): void => {
    if (user === author) {
      deleteComment(id);
    } else {
      alert("U are not able to delete this comment");
    }
  };

  return (
    <div className="comment__wrapper">
      {changeBtnClicked ? (
        <div>
          <div>
            <input
              defaultValue={text}
              className="focused__description"
              onChange={(e) => setChangeText(e.target.value)}
              autoFocus
            ></input>
            <button
              className="popup__input_add_btn"
              onClick={() => {
                toggleChangeInput(false);
                changeComment(changeText, id);
              }}
            >
              Сохранить
            </button>
            <button
              className="popup__input_del_btn"
              onClick={() => {
                toggleChangeInput(false);
                setChangeText(text);
                changeComment(text, id);
              }}
            >
              &#10006;
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="comment__content_wrapper">
            <div className="comment__author">{author} said:&nbsp;&nbsp;</div>
            <div className="comment__text">{changeText}</div>
            <div className="comment__buttons_wrapper">
              <button
                className="comment__change_btn"
                onClick={handleChangeClick}
              >
                Change
              </button>
              <button className="comment__del_btn" onClick={handleDeleteClick}>
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

type Props = {
  author: string;
  text: string;
  id: number;
  deleteComment: (arg: number) => void;
  changeComment: (text: string, id: number) => void;
  user: string;
};
