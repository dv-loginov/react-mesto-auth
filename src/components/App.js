import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import AuthOkPopup from './AuthOkPopup';
import AuthErrorPopup from './AuthErrorPopup';
import apiAuth from '../utils/apiAuth';

const App = () => {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAuthOkPopupOpen, setIsAuthOkPopupOpen] = useState(false);
  const [isAuthErrorPopupOpen, setIsAuthErrorPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({name: '', link: ''});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false);

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
    setIsAuthOkPopupOpen(false);
    setIsAuthErrorPopupOpen(false);
  }

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    }).catch((err) => console.error(err));
  }

  const handleCardDelete = (card) => {
    api.deleteCard(card._id).then(() =>
      setCards((state) => state.filter((c) => c._id !== card._id))
    ).catch((err) => console.error(err));
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

  //login@test.ru
  //password12345

  const handleLogin = ({email, password}) => {
    apiAuth.login({password, email})
      .then((data) => {
        console.log(data);
        setLoggedIn(true);
        console.log(isLoggedIn);
        <Navigate to='/' replace/>
      })
      .catch((err) => {
        console.error(err);
        setIsAuthErrorPopupOpen(true);
      })

    console.log('Login');
    console.log(`Пользователь - ${ email } Пароль - ${ password }`);
    // setIsAuthErrorPopupOpen(true);
  }

  const handleRegister = ({email, password}) => {
    apiAuth.register({password, email})
      .then((data) => {
        console.log(data);
        setIsAuthOkPopupOpen(true)
      })
      .catch((err) => {
        console.error(err);
        setIsAuthErrorPopupOpen(true)
      })
    console.log('Register');
    console.log(`Пользователь - ${ email } Пароль - ${ password }`);
    // setIsAuthOkPopupOpen(true);
  }

  return (
    <CurrentUserContext.Provider value={ currentUser }>
      <div className='page'>
        <div className='page__content'>
          <Header isLoggedIn={ isLoggedIn }/>
          <Routes>
            <Route path="/" element={
              <ProtectedRoute
                element={ <Main
                  onEditProfile={ handleEditProfileClick }
                  onAddPlace={ handleAddPlaceClick }
                  onEditAvatar={ handleEditAvatarClick }
                  onCardClick={ handleCardClick }
                  onCardLike={ handleCardLike }
                  onCardDelete={ handleCardDelete }
                  cards={ cards }/> }
                isLoggedIn={ isLoggedIn }
              />
            }/>
            <Route
              path="/login"
              element={
                <main className="auth">
                  <Login handleLogin={ handleLogin }/>
                </main> }/>
            <Route
              path="/sign-in"
              element={
                <main className="auth">
                  <Register handleRegister={ handleRegister }/>
                </main> }/>
            <Route path="*" element={ <h2>Page not found</h2> }></Route>
          </Routes>
          <Footer/>

          <AuthOkPopup
            isOpen={ isAuthOkPopupOpen }
            onClose={ closeAllPopups }/>

          <AuthErrorPopup
            isOpen={ isAuthErrorPopupOpen }
            onClose={ closeAllPopups }/>

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
