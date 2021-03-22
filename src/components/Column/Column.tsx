// import React from 'react'
import './Column.css';
import Card from '../Cards';

const Column = () =>  (
    <div className='Column'>
      <div className='ColumnName'>Имя колонки</div>
      <ul className='CardsList'>Список карточек
        <Card/>
          
      </ul>
    </div>
  );

  export default Column