import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.galleryList}>
      {Array.isArray(images) &&
        images.map((item, index) => {
          return (
            <li
              className={css.galleryItem}
              key={item.id}
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <ImageCard image={item} />
            </li>
          );
        })}
    </ul>
  );
};
export default ImageGallery;
