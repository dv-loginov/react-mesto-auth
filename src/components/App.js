import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

const App = () => {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({name: '', link: ''});

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (data) => {
    setSelectedCard(data);
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({name: '', link: ''});
  }

  return (
    <div className='page'>
      <div className='page__content'>
        <Header/>

        <Main onEditProfile={ handleEditProfileClick }
              onAddPlace={ handleAddPlaceClick }
              onEditAvatar={ handleEditAvatarClick }
              onCardClick={ handleCardClick }/>
        <Footer/>

        <PopupWithForm
          name='profile'
          title='Редактировать профиль'
          isOpen={ isEditProfilePopupOpen }
          onClose={ closeAllPopups }
          buttonText='Сохранить'>

          <input id='name-input'
                 type='text'
                 className='form__input'
                 name='name'
                 defaultValue=''
                 minLength='2'
                 maxLength='40'
                 placeholder='Имя'
                 required/>
          <span className='name-input-error form__input-error'>Error</span>
          <input id='job-input'
                 type='text'
                 className='form__input'
                 name='job'
                 defaultValue=''
                 minLength='2'
                 maxLength='200'
                 placeholder='Занятие'
                 required/>
          <span className='job-input-error form__input-error'>Error</span>
        </PopupWithForm>

        <PopupWithForm
          name='place'
          title='Новое место'
          isOpen={ isAddPlacePopupOpen }
          onClose={ closeAllPopups }
          buttonText='Создать'>

          <input id='title-input'
                 type='text'
                 className='form__input'
                 name='name'
                 placeholder='Название'
                 defaultValue=''
                 minLength='2'
                 maxLength='30'
                 required/>
          <span className='title-input-error form__input-error'>Error</span>
          <input id='url-input'
                 type='url'
                 className='form__input'
                 name='url'
                 placeholder='Ссылка на картинку'
                 defaultValue=''
                 required/>
          <span className='url-input-error form__input-error'>Error</span>
        </PopupWithForm>

        <PopupWithForm
          name='avatar'
          title='Обновить аватар'
          isOpen={ isEditAvatarPopupOpen }
          onClose={ closeAllPopups }
          buttonText='Сохранить'>

          <input id='url-avatar-input'
                 type='url'
                 className='form__input'
                 name='url'
                 placeholder='Ссылка на картинку'
                 defaultValue=''
                 required/>
          <span className='url-avatar-input-error form__input-error'>Error</span>
        </PopupWithForm>

        <ImagePopup
          card={ selectedCard }
          onClose={ closeAllPopups }
        />
      </div>
    </div>
  );
}

export default App;
