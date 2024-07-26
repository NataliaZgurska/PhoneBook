import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import { IoIosLogOut } from 'react-icons/io';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.welcome}>
        Welcome, <span className={css.username}>{user.name}</span>
      </p>

      <button
        type="button"
        className={css.logoutBtn}
        onClick={() => dispatch(logout())}
      >
        <IoIosLogOut size={30} />
        <span className={css.tooltiptext}>LogOut</span>
      </button>
    </div>
  );
};

export default UserMenu;
