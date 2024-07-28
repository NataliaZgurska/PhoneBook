import { Helmet } from 'react-helmet-async';
import { getImages } from '../../services/gallery.js';
import { useEffect, useState } from 'react';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import { TbReload } from 'react-icons/tb';

import css from './HomePage.module.css';

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

        <div className={css.fixedBtn}>
          <button
            type="button"
            className="btnSmall"
            onClick={() => location.reload()}
          >
            <TbReload size={30} />
            <span className="tooltiptext">Reload page</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
