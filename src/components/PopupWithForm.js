const PopupWithForm = (props) => {
  return (
    <div className={ `popup popup_type_${ props.name }` }>
      <div className='popup__container'>
        <h3 className="popup__title">{ props.title }</h3>
        <form action="#" className="form" name={ `${ props.name }-form` } noValidate>
          { props.children }
        </form>
        <button type="button" className="popup__close"></button>
      </div>
    </div>
  );
};

export default PopupWithForm;
