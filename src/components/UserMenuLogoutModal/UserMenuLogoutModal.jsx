import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import ModalComponent from '../ModalComponent/ModalComponent';
import { logout } from '../../redux/auth/operations';

const UserMenuLogoutModal = ({ isOpen, closeModal }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(logout());
    closeModal();
  };

  return (
    <ModalComponent isOpen={isOpen} closeModal={closeModal}>
      <div className="modalBoxWrap">
        <h3 style={{ color: 'blue' }}>Do you already leave?</h3>

        <div className="modalBtns">
          <button onClick={handleDelete} className="modalBtn">
            Yes
          </button>
          <button onClick={closeModal} className="modalBtn">
            No
          </button>
        </div>
      </div>
    </ModalComponent>
  );
};

export default UserMenuLogoutModal;
