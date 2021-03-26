import React, { useState } from "react";
import "./styles.css";

type Props = {
  onClick: (arg: boolean) => void;
  createCard: (arg: any) => void;
};

const ColumnInput: React.FC<Props> = ({ onClick, createCard }) => {
  const closeInput = () => {
    onClick(false);
  };
  const [title, setTitle] = useState("");

  return (
    <div className="card__input">
      <input
        placeholder="Введите заголовок для карточки"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      ></input>
      {/* <button className="InputAddBtn" onClick={() => {}}> */}
      <button className="input__add_btn" onClick={() => createCard(title)}>
        Добавить
      </button>
      <button className="input__del_btn" onClick={closeInput}>
        &#10006;
      </button>
    </div>
  );
};

export default ColumnInput;
