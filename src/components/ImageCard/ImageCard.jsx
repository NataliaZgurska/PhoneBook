import css from './ImageCard.module.css';

const ImageCard = ({ image }) => {
  return (
    <div className={css.imgContainer}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={css.imgPicture}
      />
    </div>
  );
};

export default ImageCard;
