import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (timer === 10) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={css.container}>
      <h2 className={css.title}>Page you visited doesn&apos;t exist</h2>

      <Link className="formBtn" to="/">
        Come back Home
      </Link>

      <div className={css.timer}>
        <h3>
          You will be redirected to <span>Home</span> in{' '}
          <span>{10 - timer}</span> seconds
        </h3>
      </div>
    </div>
  );
};

export default NotFoundPage;
