import { useState, useEffect } from 'react';
import api from '../utils/Api';

const Main = (props) => {

  const [{userName, userDescription, userAvatar}, setUser] = useState({});

  useEffect(() => {
    api.getUser()
      .then((data) => {
        console.log(data);
        setUser({
          userName: data.name,
          userDescription: data.about,
          userAvatar: data.avatar
        })
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
                  style={ {backgroundImage: `url(${ userAvatar })`} }>
            {/*<img src={ userAvatar || cap }*/ }
            {/*     alt="Аватар"*/ }
            {/*     className="profile__avatar"/>*/ }
          </button>
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
        <ul className="elements"></ul>
      </section>
    </main>
  );
}

export default Main;
