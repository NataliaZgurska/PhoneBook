import { Helmet } from 'react-helmet-async';
import css from './HomePage.module.css';
import { getImages } from '../../services/gallery.js';
import { useEffect, useState } from 'react';
import ImageGallery from '../../components/ImageGallery/ImageGallery';

const HomePage = () => {
  const [images, setImages] = useState(null);

  const fetchImages = async () => {
    try {
      const data = await getImages();
      setImages(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <Helmet>
        <title>HomePage</title>
      </Helmet>
      <div className={css.homePageContainer}>
        <ImageGallery images={images} />

        <div className={css.welcomeTextWrap}>
          <p className={css.welcomeText}>
            Welcome! Save and manage your contacts
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
