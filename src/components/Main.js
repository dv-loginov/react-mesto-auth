import { useState, useEffect } from 'react';
import api from '../utils/Api';

const Main = (props) => {

  const [{userName, userDescription, userAvatar}, setUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUser()
      .then((data) => {
        setUser({
          userName: data.name,
          userDescription: data.about,
          userAvatar: data.avatar
        })
      })
      .catch((err) => console.error(err))
  }, []);

  useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.error(err))
  }, []);

  return (
    <main className="main">
      <section>
        <div className="profile">
          <button type='button'
                  className="profile__avatar-edit"
                  onClick={ props.onEditAvatar }
                  style={ {backgroundImage: `url(${ userAvatar })`} }/>
          <div className="profile__info">
            <div className="profile__row">
              <h1 className="profile__title">{ userName }</h1>
              <button className="profile__edit-btn"
                      type="button"
                      onClick={ props.onEditProfile }/>
            </div>
            <p className="profile__subtitle">{ userDescription }</p>
          </div>
          <button className="add-btn"
                  type="button"
                  onClick={ props.onAddPlace }/>
        </div>
      </section>
      <section>
        <ul className="elements">
          {
            cards.map((card) => {
              return (
                <li className="element" key={card._id}>
                  <img src={card.link} alt={card.name} className="element__img"/>
                  <button type="button" className="element__btn-trash"></button>
                  <div className="element__row">
                    <h2 className="element__name">{card.name}</h2>
                    <div className="element__btn-warp">
                      <button type="button" className="element__btn-like"></button>
                      <span className="element__counter-like">{card.likes.length}</span>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;
