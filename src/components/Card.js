import React from 'react';

const Card = ({card, onCardClick}) => {
  const handleClick = () => {
    onCardClick(card);
  }

  return (
    <li className="element">
      <img
        src={ card.link }
        alt={ card.name }
        className="element__img"
        onClick={ handleClick }/>
      <button type="button" className="element__btn-trash"></button>
      <div className="element__row">
        <h2 className="element__name">{ card.name }</h2>
        <div className="element__btn-warp">
          <button type="button" className="element__btn-like"></button>
          <span className="element__counter-like">{ card.likes.length }</span>
        </div>
      </div>
    </li>
  );
};

export default Card;
