import { FaPhone } from 'react-icons/fa6';
import { MdDeleteForever } from 'react-icons/md';
import { useState } from 'react';
import ContactDelModal from '../ContactDelModal/ContactDelModal';

import css from './Contact.module.css';

const Contact = ({ contact }) => {
  const { name, number } = contact;

  // *****модальне вікно для видалення контакта****
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  // *******

  return (
    <>
      <div className={css.contactContainer}>
        <div className={css.nameNumberWrap}>
          <p className={css.contactName}>{name}</p>

          <p className={css.contactNumber}>
            <FaPhone />
            {number}
          </p>
        </div>
        <button onClick={openModal} className={css.deleteBtn}>
          <MdDeleteForever size={30} className={css.deleteBtnImg} />
        </button>
      </div>

      <ContactDelModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        contact={contact}
      />
    </>
  );
};

export default Contact;
