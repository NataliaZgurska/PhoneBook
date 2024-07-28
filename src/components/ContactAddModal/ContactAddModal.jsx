import ContactAddForm from '../ContactAddForm/ContactAddForm';
import ModalComponent from '../ModalComponent/ModalComponent';
import css from './ContactAddModal.module.css';

const ContactAddModal = ({ isOpen, closeModal }) => {
  return (
    <ModalComponent isOpen={isOpen} closeModal={closeModal}>
      <div className={css.box}>
        <h2>Add a new contact</h2>
        <ContactAddForm closeModal={closeModal} />
      </div>
    </ModalComponent>
  );
};

export default ContactAddModal;
