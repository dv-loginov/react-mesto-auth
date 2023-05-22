import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

const App = () => {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({name: '', link: ''});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUser()
      .then((data) => {
        setCurrentUser(data);
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

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  const handleCardDelete = (card) => {
    api.deleteCard(card._id).then(() =>
      setCards((state) => state.filter((c) => c._id !== card._id))
    );
  }

  const handleUpdateUser = ({name, about}) => {
    api.setUser({name, about})
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => console.error(err));
  }

  const handleUpdateAvatar = ({avatar}) => {
    api.setAvatar(avatar)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => console.error(err));
  }

  const handleAddPlaceSubmit = ({name, link}) => {
    api.addCard({name, link})
      .then((data) => {
        setCards([data, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.error(err));
  }


  return (
    <CurrentUserContext.Provider value={ currentUser }>
      <div className='page'>
        <div className='page__content'>
          <Header/>

          <Main onEditProfile={ handleEditProfileClick }
                onAddPlace={ handleAddPlaceClick }
                onEditAvatar={ handleEditAvatarClick }
                onCardClick={ handleCardClick }
                onCardLike={ handleCardLike }
                onCardDelete={ handleCardDelete }
                cards={ cards }/>
          <Footer/>

          <EditProfilePopup
            isOpen={ isEditProfilePopupOpen }
            onClose={ closeAllPopups }
            onUpdateUser={ handleUpdateUser }/>

          <EditAvatarPopup
            isOpen={ isEditAvatarPopupOpen }
            onClose={ closeAllPopups }
            onUpdateAvatar={ handleUpdateAvatar }/>

          <AddPlacePopup
            isOpen={ isAddPlacePopupOpen }
            onClose={ closeAllPopups }
            onAddPlace={ handleAddPlaceSubmit }
          />

          <ImagePopup
            card={ selectedCard }
            onClose={ closeAllPopups }
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
