import { Helmet } from 'react-helmet-async';
import css from './HomePage.module.css';
import { getImages } from '../../services/gallery.js';
import { useEffect, useState } from 'react';

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
        <div className={css.circle}>
          <p className={css.welcomeText}>
            Welcome🎉! Save and manage your contacts
          </p>

          <ImageGallery images={images} />
        </div>

        {/* <div className={css.imgWrap}>
          <img src={firstPicture} alt="tulips" className={css.homePageImg} />
        </div> */}
      </div>
    </>
  );
};

export default HomePage;
