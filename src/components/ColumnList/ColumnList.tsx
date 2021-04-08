import React from "react";
import Column from "../Column";
import { CommentType } from "../../App";
import styled from "styled-components";

const ColumnList: React.FC<Props> = ({
  columns,
  handleClick,
  cards,
  openCard,
  createCard,
  changeColumnTitle,
  comments,
}) => {
  return (
    <Container>
      {columns.map((column) => {
        return (
          <Column
            openCard={openCard}
            createCard={createCard}
            title={column.title}
            id={column.id}
            key={column.id}
            cards={cards}
            changeColumnTitle={changeColumnTitle}
            comments={comments}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  background-color: rgb(196, 190, 190);
  padding: 15px;
`;

export default ColumnList;

type Props = {
  columns: Array<any>;
  handleClick: (arg: any) => void;
  cards: Array<any>;
  openCard: (arg: any) => void;
  createCard: (title: string, columnId: number) => void;
  changeColumnTitle: (title: string, id: number) => void;
  comments: Array<CommentType>;
};
