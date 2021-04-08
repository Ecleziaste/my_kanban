import React, { useState } from "react";
import styled from "styled-components";

import "./styles.css";
import ColumnInput from "../ColumnInput";
import Card from "../Card";
import { CommentType } from "../../App";

const Column: React.FC<Props> = ({
  title,
  id,
  cards,
  openCard,
  createCard,
  changeColumnTitle,
  comments,
}) => {
  const [activeColumnInput, setActiveColumnInput] = useState(false);

  const handleClick = (): void => {
    setActiveColumnInput(true);
  };
  const toggleInput = (value: boolean): void => {
    setActiveColumnInput(value);
  };

  const cardsByColumnId = cards.filter((card) => card.columnId === id);

  const handleFocus = (e: any): void => {
    e.target.classList.add("focused");
  };
  const handleBlur = (e: any): void => {
    e.target.classList.remove("focused");
  };

  return (
    <Container>
      <Title
        // Focused={Focused}
        onFocus={handleFocus}
        onBlur={handleBlur}
        contentEditable={true}
        suppressContentEditableWarning={true}
        onInput={(e) =>
          changeColumnTitle(e.currentTarget.textContent || "", id)
        }
        defaultValue={title}
      >
        {title}
      </Title>
      <Cardlist>
        {cardsByColumnId.map((card) => {
          return (
            <Card
              card={card}
              openCard={openCard}
              key={card.id + 1}
              comments={comments}
            />
          );
        })}
      </Cardlist>
      {activeColumnInput ? (
        <ColumnInput
          id={id}
          createCard={createCard}
          toggleInput={toggleInput}
        />
      ) : (
        <AddCardBtn onClick={handleClick}>&#43; Добавить Карточку</AddCardBtn>
      )}
    </Container>
  );
};

const Container = styled.div`
  background-color: rgba(245, 239, 239, 0.932);
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  margin: 10px;
  padding: 10px;
  border: 3px solid rgb(5, 92, 92);
  border-radius: 10px;
  width: 20%;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin: 5px;
  padding: 5px;
  /* box-shadow: 0 0 5px 1px #036788;
  background: white; */
  cursor: pointer;
`;

const Focused = styled.input`
  box-shadow: 0 0 5px 1px #036788;
  background: white;
  cursor: text;
`;

const Cardlist = styled.div`
  width: 96%;
  margin: 5px;
  padding: 0;
`;
const AddCardBtn = styled.button`
  margin: 5px;
  height: 25px;
  width: 96%;
  background-color: rgb(122, 122, 247);
  text-align: left;
`;
// const Input = styled.input`
//   font-size: 20px;
//   font-weight: 400;
//   &:focus {
//     box-shadow: 0 0 5px 1px #036788;
//     background: white;
//     cursor: text;
//   }
// `;
export default Column;

type Props = {
  title: string;
  id: number;
  cards: Array<any>;
  openCard: (arg: any) => void;
  createCard: (title: string, columnId: number) => void;
  changeColumnTitle: (title: string, id: number) => void;
  comments: Array<CommentType>;
};
