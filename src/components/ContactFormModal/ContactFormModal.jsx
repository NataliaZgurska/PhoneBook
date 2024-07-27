import Modal from '../Modal/Modal.jsx';
import ContactForm from '../ContactForm/ContactForm.jsx';

import css from './ContactFormModal.module.css';

const ContactFormModal = ({ modalIsOpen, closeModal }) => {
  return (
    <Modal modalIsOpen={modalIsOpen} closeModal={closeModal}>
      <div className={css.box}>
        <h3 className={css.title}>Add contact</h3>
        <ContactForm closeModal={closeModal} />
      </div>
    </Modal>
  );
};

export default ContactFormModal;
