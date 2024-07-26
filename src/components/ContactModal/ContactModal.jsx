import React, { FC } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import css from './ContactModal.module.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const ContactModal = ({ onCloseModal, isModalOpen, contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    onCloseModal();
  };
  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={onCloseModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {contact && (
          <div className={css.modalContent}>
            <p className={css.modalTitle}>
              Are you sure you want to delete {contact.name}?
            </p>
            <div className={css.modalBtns}>
              <button onClick={handleDelete} className={css.modalBtn}>
                Yes
              </button>
              <button onClick={onCloseModal} className={css.modalBtn}>
                No
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ContactModal;
