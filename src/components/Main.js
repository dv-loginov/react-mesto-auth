import cap from '../images/cap.jpg';

const Main = () => {

  const handleEditAvatarClick = () => {
    document.querySelector('.popup_type_avatar').classList.add('popup_opened');
  };
  const handleEditProfileClick = () => {
    document.querySelector('.popup_type_profile').classList.add('popup_opened');
  };
  const handleAddPlaceClick = () => {
    document.querySelector('.popup_type_place').classList.add('popup_opened');
  };

  return (
    <main className="main">
      <section>
        <div className="profile">
          <button type='button'
                  className="profile__avatar-edit"
                  onClick={ handleEditAvatarClick }>
            <img src={ cap }
                 alt="Аватар"
                 className="profile__avatar"/>
          </button>
          <div className="profile__info">
            <div className="profile__row">
              <h1 className="profile__title">Имя</h1>
              <button className="profile__edit-btn"
                      type="button"
                      onClick={ handleEditProfileClick }/>
            </div>
            <p className="profile__subtitle"></p>
          </div>
          <button className="add-btn"
                  type="button"
                  onClick={ handleAddPlaceClick }/>
        </div>
      </section>
      <section>
        <ul className="elements"></ul>
      </section>
    </main>
  );
}

export default Main;
