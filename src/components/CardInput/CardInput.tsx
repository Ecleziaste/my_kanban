import React from 'react'
import './styles.css';

function CardInput() {
    return (
        <div className='CardInput'>
        <input placeholder="Введите заголовок для карточки">Заголовок карточки</input>
        <div>Число комментов</div>
        {/* отображается, если комменты вообще есть */}
        </div> 
    );
  }

// const CreateCard = () =>  (
//   <div className='CreateCard'>
//     <input placeholder="Введите заголовок для карточки">Заголовок карточки</input>
//     <div>Число комментов</div>
//   </div> 
//   );

// export default CreateCard
export default CardInput