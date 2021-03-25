import React, { useState } from "react";
import "./styles.css";
import Column from "../Column";

type Props = {};

const ColumnList: React.FC<Props> = () => {
  const [columns, addColumn] = useState([
    { title: "TODO", columnId: 1 },
    { title: "In Progress", columnId: 2 },
    { title: "Testing", columnId: 3 },
    { title: "Done", columnId: 4 },
  ]);

  // const handleClick = (): void => {
  //   const value: number = columns.length;

  //   addColumn((columns) => [
  //     ...columns,
  //     { title: "New Column", columnId: value + 1 },
  //   ]);

  //   console.log(value + 1);
  // };

  return (
    <div className="ColumnList">
      {/* <div className="AddColumn">
        <input type="button" onClick={handleClick} value="Add Column" />
      </div> */}
      {columns.map((column) => {
        return (
          <Column
            columnTitle={column.title}
            columnId={column.columnId}
            key={column.columnId}
          />
        );
      })}
    </div>
  );
};

export default ColumnList;
