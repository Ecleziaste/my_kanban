import React from "react";
import "./styles.css";
import Column from "../Column";
import { CommentType } from "../../App";

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
    <div className="column__list">
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
    </div>
  );
};

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
