import React from 'react'
import './Card.css';

const OpenedCard = () =>  (
    <div className='OpenedCard'>
        <div>Card Header</div>
        {/* описание - отдельный компонент? смысл, если он привязан к карточке? */}
        <div>Description
            <h4>Description Header</h4>
            <p>Description Body</p>
        </div>
        {/* комменты делаем отдельным компоненом */}
        <div>Comments</div>
    </div> 
  );

export default OpenedCard