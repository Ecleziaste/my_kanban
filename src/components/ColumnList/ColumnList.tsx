import React, { useState } from "react";
import "./styles.css";
import Column from "../Column";

type Props = {
  user: string;
  openCard: (arg: any) => void;
};

const ColumnList: React.FC<Props> = ({ user, openCard }) => {
  const [columns, addColumn] = useState([
    { title: "TODO", columnId: 1 },
    { title: "In Progress", columnId: 2 },
    { title: "Testing", columnId: 3 },
    { title: "Done", columnId: 4 },
  ]);

  return (
    <div className="ColumnList">
      {columns.map((column) => {
        return (
          <Column
            openCard={openCard}
            user={user}
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
