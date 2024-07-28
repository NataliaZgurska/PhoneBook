import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import ModalComponent from '../ModalComponent/ModalComponent';
import { deleteContact } from '../../redux/contacts/operations';
import css from './ContactDelModal.module.css';

const ContactDelModal = ({ isOpen, closeModal, contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    closeModal();
  };

  return (
    <ModalComponent isOpen={isOpen} closeModal={closeModal}>
      <div className={css.box}>
        <h3 className={css.title}>
          Are you sure you want to delete {contact.name}?
        </h3>

        <div className={css.modalBtns}>
          <button onClick={handleDelete} className={css.modalBtn}>
            Yes
          </button>
          <button onClick={closeModal} className={css.modalBtn}>
            No
          </button>
        </div>
      </div>
    </ModalComponent>
  );
};

export default ContactDelModal;
