import Header from './Header';
import Footer from './Footer';
import Main from './Main';

const  App = () => {
  return (
    <div className="page">
      <div className="page__content">

        <Header/>
        <Main/>
        <Footer/>

        <div className="popup popup_type_profile">
          <div className="popup__container">
            <h3 className="popup__title">Редактировать профиль</h3>
            <form action="#" className="form" name="profile-form" noValidate>
              <input id="name-input"
                     type="text"
                     className="form__input"
                     name="name"
                     defaultValue=""
                     minLength="2"
                     maxLength="40"
                     required/>
              <span className="name-input-error form__input-error">Error</span>
              <input id="job-input"
                     type="text"
                     className="form__input"
                     name="job"
                     defaultValue=""
                     minLength="2"
                     maxLength="200"
                     required/>
              <span className="job-input-error form__input-error">Error</span>
              <button type="submit" className="form__btn">Сохранить</button>
            </form>
            <button type="button" className="popup__close"></button>
          </div>
        </div>

        <div className="popup popup_type_place">
          <div className="popup__container">
            <h3 className="popup__title">Новое место</h3>
            <form action="#" className="form" name="card-form" noValidate>
              <input id="title-input"
                     type="text"
                     className="form__input"
                     name="name"
                     placeholder="Название"
                     defaultValue=""
                     minLength="2"
                     maxLength="30"
                     required/>
              <span className="title-input-error form__input-error">Error</span>
              <input id="url-input"
                     type="url"
                     className="form__input"
                     name="url"
                     placeholder="Ссылка на картинку"
                     defaultValue=""
                     required/>
              <span className="url-input-error form__input-error">Error</span>
              <button type="submit" className="form__btn" name="create">Создать</button>
            </form>
            <button type="button" className="popup__close"></button>
          </div>
        </div>

        <div className="popup popup_type_avatar">
          <div className="popup__container">
            <h3 className="popup__title">Обновить аватар</h3>
            <form action="#" className="form" name="avatar-form" noValidate>
              <input id="url-avatar-input"
                     type="url"
                     className="form__input"
                     name="url"
                     placeholder="Ссылка на картинку"
                     defaultValue=""
                     required/>
              <span className="url-avatar-input-error form__input-error">Error</span>
              <button type="submit" className="form__btn" name="save">Сохранить</button>
            </form>
            <button type="button" className="popup__close"></button>
          </div>
        </div>

        <div className="popup popup_type_question">
          <div className="popup__container">
            <h3 className="popup__title">Вы уверены?</h3>
            <form action="#" className="form form_question" name="question-form" noValidate>
              <button type="submit" className="form__btn form__btn_question" name="answer">Да</button>
            </form>
            <button type="button" className="popup__close"></button>
          </div>
        </div>

        <div className="popup popup_type_img">
          <figure className="popup__container-img">
            <img className="popup__img" src="#" alt="#"/>
            <figcaption className="popup__caption"></figcaption>
            <button type="button" className="popup__close"></button>
          </figure>
        </div>

        <template id="card">
          <li className="element">
            <img src="#" alt="#" className="element__img"/>
            <button type="button" className="element__btn-trash"></button>
            <div className="element__row">
              <h2 className="element__name">Имя</h2>
              <div className="element__btn-warp">
                <button type="button" className="element__btn-like"></button>
                <span className="element__counter-like">0</span>
              </div>
            </div>
          </li>
        </template>

      </div>
    </div>
  );
}

export default App;
