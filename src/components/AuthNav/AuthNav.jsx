import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './AuthNav.module.css';

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const AuthNav = () => {
  return (
    <div className={css.registrationLoginWrap}>
      <NavLink to="/register" className={getNavLinkClassName}>
        SignUp
      </NavLink>

      <NavLink to="/login" className={getNavLinkClassName}>
        SignIn
      </NavLink>
    </div>
  );
};

export default AuthNav;
