import PopupWithForm from './PopupWithForm';
import { useRef } from 'react';

const AddPlacePopup = ({isOpen, onClose, onAddPlace}) => {

  const inputNameRef = useRef();
  const inputLinkRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddPlace({name: inputNameRef.current.value, link: inputLinkRef.current.value});
    inputNameRef.current.value = '';
    inputLinkRef.current.value = '';
  };

  return (
    <PopupWithForm
      onSubmit={ handleSubmit }
      name='place'
      title='Новое место'
      isOpen={ isOpen }
      onClose={ onClose }
      buttonText='Создать'>

      <input id='title-input'
             type='text'
             className='form__input'
             name='name'
             placeholder='Название'
             defaultValue=''
             minLength='2'
             maxLength='30'
             ref={ inputNameRef }
             required/>
      <span className='title-input-error form__input-error'>Error</span>
      <input id='url-input'
             type='url'
             className='form__input'
             name='url'
             placeholder='Ссылка на картинку'
             defaultValue=''
             ref={ inputLinkRef }
             required/>
      <span className='url-input-error form__input-error'>Error</span>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
