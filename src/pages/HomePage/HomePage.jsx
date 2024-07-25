import { Helmet } from 'react-helmet-async';
import css from './HomePage.module.css';
import firstPicture from './tulips-min.jpg';

const HomePage = () => {
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
        </div>

        {/* <div className={css.imgWrap}>
          <img src={firstPicture} alt="tulips" className={css.homePageImg} />
        </div> */}
      </div>
    </>
  );
};

export default HomePage;
