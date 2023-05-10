import PopupWithForm from './PopupWithForm';
import { useRef } from 'react';

const EditAvatarPopup = ({isOpen, onClose, onUpdateAvatar}) => {

  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
    inputRef.current.value = '';
  }

  return (
    <PopupWithForm
      onSubmit={ handleSubmit }
      name='avatar'
      title='Обновить аватар'
      isOpen={ isOpen }
      onClose={ onClose }
      buttonText='Сохранить'>

      <input id='url-avatar-input'
             type='url'
             className='form__input'
             name='url'
             placeholder='Ссылка на картинку'
             ref={ inputRef }
             required/>
      <span className='url-avatar-input-error form__input-error'>Error</span>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
