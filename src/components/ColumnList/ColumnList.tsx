// import React from 'react'
import './styles.css';
import Column from './components/Column';

const columns = [
  {title: 'TODO', id: 1},
  {title: 'In Progress', id: 2},
  {title: 'Testing', id: 3},
  {title: 'Done', id: 4}
];

const ColumnList = () =>  (
   <div>
     {columns.map((column) => {
       return (<Column title={column.title} id={column.id} />)
     })}
   </div>
  );

  export default ColumnList