import { useState, useEffect } from 'react';
import api from '../utils/api';
import Card from './Card';

const Main = ({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) => {
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
                  onClick={ onEditAvatar }
                  style={ {backgroundImage: `url(${ userAvatar })`} }/>
          <div className="profile__info">
            <div className="profile__row">
              <h1 className="profile__title">{ userName }</h1>
              <button className="profile__edit-btn"
                      type="button"
                      onClick={ onEditProfile }/>
            </div>
            <p className="profile__subtitle">{ userDescription }</p>
          </div>
          <button className="add-btn"
                  type="button"
                  onClick={ onAddPlace }/>
        </div>
      </section>
      <section>
        <ul className="elements">
          {
            cards.map((card) => {
              return (
                <Card key={ card._id }
                      card={ card }
                      onCardClick={ onCardClick }
                />
              )
            })
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;
