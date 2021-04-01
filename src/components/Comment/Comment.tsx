import React from "react";
import "./styles.css";

type Props = {
  author: string;
  text: string;
  id: number;
  deleteComment: (arg: number) => void;
};

const Comment: React.FC<Props> = ({ author, text, id, deleteComment }) => {
  // const commentsByCardId = comments.filter((comment) => comments.id === id);

  return (
    <div className="comment__wrapper">
      {/* <input className="comments__input" placeholder=""></input>
      <button className="comments__addBtn">Добавить</button> */}
      <div className="comment__content_wrapper">
        <div className="comment__author">{author} said:&nbsp;&nbsp;</div>
        <div className="comment__text">{text}</div>
      </div>
      <div className="comment__buttons_wrapper">
        <button className="comment__change_btn">Change</button>
        <button className="comment__del_btn" onClick={() => deleteComment(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Comment;
