const ImagePopup = (props) => {
  return (
    <div className={ `popup popup_type_${ props.card.name }${ props.card.link && ' popup_opened' }` }>
      <figure className="popup__container-img">
        <img className="popup__img" src={ props.card.link } alt={ props.card.name }/>
        <figcaption className="popup__caption">{ props.card.name }</figcaption>
        <button
          type="button"
          className="popup__close"
          onClick={ () => {
            props.onClose(props.name)
          } }/>
      </figure>
    </div>
  );
};

export default ImagePopup;
