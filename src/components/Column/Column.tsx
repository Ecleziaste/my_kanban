import React from 'react'

import './Column.css';


const cards = [
  {title: 'qweqwe', id: 1, author: 'Vasya', description: 'qweq253we', columnId: 1},
  {title: 'qweqwe', id: 2, author: 'Vasya', description: 'qweq523we', columnId: 2},
  {title: 'qweqwe', id: 3, author: 'Vasya', description: 'q2eq53we', columnId: 3},
  {title: 'qweqwe', id: 4, author: 'Vasya', description: 'qweqwe', columnId: 4},
  {title: 'qweqwe', id: 5, author: 'Vasya', description: 'qwe243qwe', columnId: 1},
  {title: 'qweqwe', id: 6, author: 'Vasya', description: 'qwe23qwe', columnId: 2},
  {title: 'qweqwe', id: 7, author: 'Vasya', description: 'q42weqwe', columnId: 3},
  {title: 'qweqwe', id: 8, author: 'Vasya', description: 'qwe423qwe', columnId: 4},
  {title: 'qweqwe', id: 9, author: 'Vasya', description: 'q234weq432we', columnId: 1},
  {title: 'qweqwe', id: 10, author: 'Vasya', description: 'qw2eqwe', columnId: 2},
  {title: 'qweqwe', id: 11, author: 'Vasya', description: 'qwe234qwe', columnId: 3},
]

// const filteredCards = cards.filter(card => card.columnId === columnId)

type Props = {
  title: string;
  id: number
}

const Column: React.FC<Props> = ({title, id}) =>  {
  const addCard = () => {

  }
  
  return(
    <div className='Column'>
      <div className='ColumnName'>{title}</div>
      <div className='CardsList'>
        {/* <CardList columnId={id}/> */}
      </div>
      <button className='ColumnButton' onClick={addCard}>&#43;  Добавить Карточку</button>
    </div>
  )};

  export default Column