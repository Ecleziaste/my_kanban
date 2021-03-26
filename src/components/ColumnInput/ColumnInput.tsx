import React, { useState } from "react";
import "./styles.css";

type Props = {
  onClick: (arg: boolean) => void;
  createCard: (arg: any) => void;
};

const ColumnInput: React.FC<Props> = ({
  onClick,
  createCard,
}) => {
  const closeInput = () => {
    onClick(false);
  };
  const [title, setTitle] = useState("");

  return (
    <div className="ColumnInput">
      <input
        placeholder="Введите заголовок для карточки"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      ></input>
      {/* <button className="InputAddBtn" onClick={() => {}}> */}
      <button className="InputAddBtn" onClick={() => createCard(title)}>
        Добавить
      </button>
      <button className="InputDelBtn" onClick={closeInput}>
        &#10006;
      </button>
    </div>
  );
};

export default ColumnInput;
