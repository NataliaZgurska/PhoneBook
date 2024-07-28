// import { FaPhone } from 'react-icons/fa6';
// import { MdDeleteForever } from 'react-icons/md';
// import { useDispatch } from 'react-redux';

// import { deleteContact } from '../../redux/contacts/operations';

// import css from './Contact.module.css';

// const Contact = ({ contact }) => {
//   const { id, name, number } = contact;
//   const dispatch = useDispatch();
//   const handleDelete = () => dispatch(deleteContact(id));

//   return (
//     <div className={css.contactContainer}>
//       <p className={css.contactName}>{name}</p>

//       <p className={css.contactPhoneNumber}>
//         <FaPhone />
//         {number}
//       </p>

//       <button onClick={handleDelete} className={css.deleteBtn}>
//         <MdDeleteForever size={36} color="#2f85e2" />
//       </button>
//     </div>
//   );
// };

// export default Contact;

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
      {/* <ContactModal
        onCloseModal={onCloseModal}
        isModalOpen={isModalOpen}
        contact={contact}
      /> */}
      <ContactDelModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        contact={contact}
      />
    </>
  );
};

export default Contact;
