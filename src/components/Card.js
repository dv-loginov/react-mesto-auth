import React from 'react';

const Card = (props) => {
  return (
    <li className="element">
      <img src={props.link} alt={props.name} className="element__img"/>
      <button type="button" className="element__btn-trash"></button>
      <div className="element__row">
        <h2 className="element__name">{props.name}</h2>
        <div className="element__btn-warp">
          <button type="button" className="element__btn-like"></button>
          <span className="element__counter-like">{props.likes.length}</span>
        </div>
      </div>
    </li>
  );
};

export default Card;
