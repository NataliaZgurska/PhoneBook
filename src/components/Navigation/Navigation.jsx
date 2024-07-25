import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import clsx from 'clsx';
import css from './Navigation.module.css';

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink to="/" className={getNavLinkClassName}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={getNavLinkClassName}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
export default Navigation;
