import React from "react";
import "./styles.css";
import Column from "../Column";

type Props = {
  user: string;
  // TODO: прописать интерфейс?
  columns: Array<any>;
  handleClick: (arg: any) => void;
  cards: Array<any>;
  openCard: (arg: any) => void;
  createCard: (title: string, columnId: number, columnTitle: string) => void;
};

const ColumnList: React.FC<Props> = ({
  user,
  columns,
  handleClick,
  cards,
  openCard,
  createCard,
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
            user={user}
            columnTitle={column.columnTitle}
            columnId={column.columnId}
            key={column.columnId}
            cards={cards}
          />
        );
      })}
    </div>
  );
};

export default ColumnList;
