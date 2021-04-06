import React, { useState } from "react";
import "./styles.css";

const ColumnInput: React.FC<Props> = ({ createCard, toggleInput, id }) => {
  const closeInput = () => {
    toggleInput(false);
  };
  const [title, setTitle] = useState("");

  return (
    <div className="card__input">
      <input
        autoFocus
        className="input__itself focused"
        placeholder="&nbsp;Введите заголовок для карточки"
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <div className="input__buttons_wrapper">
        <button
          className="input__add_btn"
          onClick={() => {
            createCard(title, id);
            toggleInput(false);
          }}
        >
          Добавить
        </button>
        <button className="input__del_btn" onClick={closeInput}>
          &#10006;
        </button>
      </div>
    </div>
  );
};

export default ColumnInput;

type Props = {
  id: number;
  createCard: (title: string, columnId: number) => void;
  toggleInput: (arg: boolean) => void;
};
