import React from 'react'
import './styles.css';
// нужны ли css классы для спана и дива?
const Card = () =>  (
  <div className='Card'>
    <span >Заголовок карточки</span>
    <div>Число комментов</div>
  </div> 
  );

export default Card