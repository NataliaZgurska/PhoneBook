import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import ModalComponent from '../ModalComponent/ModalComponent';
import { deleteContact } from '../../redux/contacts/operations';

const ContactDelModal = ({ isOpen, closeModal, contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    closeModal();
  };

  return (
    <ModalComponent isOpen={isOpen} closeModal={closeModal}>
      <div className="modalBoxWrap">
        <h3 style={{ color: 'red' }}>
          Are you sure you want to delete {contact.name}?
        </h3>

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

export default ContactDelModal;
