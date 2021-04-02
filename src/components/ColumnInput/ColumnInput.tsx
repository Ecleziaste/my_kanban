import React, { useState } from "react";
import "./styles.css";

type Props = {
  // title: string;
  id: number;
  createCard: (title: string, columnId: number) => void;
  toggleInput: (arg: boolean) => void;
};

const ColumnInput: React.FC<Props> = ({ createCard, toggleInput, id }) => {
  const closeInput = () => {
    toggleInput(false);
  };
  const [title, setTitle] = useState("");

  // function handleChange(e: any) {
  //   setTitle(e.target.value);
  // }
  // onChange={handleChange}

  return (
    <div className="card__input">
      <input
        autoFocus
        className="input__itself focused"
        placeholder="&nbsp;Введите заголовок для карточки"
        onChange={(e) => setTitle(e.target.value)}
        onBlur={() => {
          createCard(title, id);
          toggleInput(false);
        }}
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
