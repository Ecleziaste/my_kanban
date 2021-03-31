import React from "react";
import "./styles.css";
import Column from "../Column";

type Props = {
  // user: string;
  columns: Array<any>;
  handleClick: (arg: any) => void;
  cards: Array<any>;
  openCard: (arg: any) => void;
  createCard: (title: string, columnId: number) => void;
  changeColumnTitle: (title: string, id: number) => void;
};

const ColumnList: React.FC<Props> = ({
  columns,
  handleClick,
  cards,
  openCard,
  createCard,
  changeColumnTitle,
}) => {
  // const [title, setColumnTitle] = useState(columnTitle);
  // const changeColumnTitle = (value: string): void => {
  //   setColumnTitle(value);
  // };

  return (
    <div className="column__list">
      {/* <button className="add__column" onClick={handleClick}>
        add new column
      </button> */}
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
          />
        );
      })}
    </div>
  );
};

export default ColumnList;
