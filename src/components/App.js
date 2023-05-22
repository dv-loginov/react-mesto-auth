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
  const [selectedCard, selectCard] = useState(false);

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
    selectCard(data);
  }

  const closeAllPopups = (data) => {
    switch (data) {
      case 'avatar':
        setIsEditAvatarPopupOpen(false);
        break;
      case 'profile':
        setIsEditProfilePopupOpen(false);
        break;
      case 'place':
        setIsAddPlacePopupOpen(false);
        break;
      case 'img':
        selectCard(false);
        break;
    }
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
          onClose={ closeAllPopups }/>
        <PopupWithForm
          name='place'
          title='Новое место'
          isOpen={ isAddPlacePopupOpen }
          onClose={ closeAllPopups }/>
        <PopupWithForm
          name='avatar'
          title='Обновить аватар'
          isOpen={ isEditAvatarPopupOpen }
          onClose={ closeAllPopups }/>
        <ImagePopup
          name='img'
          card={ selectedCard }
          onClose={ closeAllPopups }
        />
      </div>
    </div>
  );
}

export default App;
