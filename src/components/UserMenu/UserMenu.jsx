import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosLogOut } from 'react-icons/io';
import { selectUser } from '../../redux/auth/selectors';
import { selectFilter } from '../../redux/filters/selectors';
import { clearFilter } from '../../redux/filters/slice';
import UserMenuLogoutModal from '../UserMenuLogoutModal/UserMenuLogoutModal';

import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const filter = useSelector(selectFilter);

  // *****модальне вікно для логауту****
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    if (filter) {
      dispatch(clearFilter());
    }
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  // *******

  return (
    <div className={css.wrapper}>
      <p className={css.welcome}>
        Welcome, <span className={css.username}>{user.name}</span>
      </p>

      <button type="button" className="btnSmall" onClick={openModal}>
        <IoIosLogOut size={30} />
        <span className="tooltiptext">LogOut</span>
      </button>

      <UserMenuLogoutModal isOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
};

export default UserMenu;
