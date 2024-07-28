import Modal from 'react-modal';
import { IoClose } from 'react-icons/io5';
import { useEffect } from 'react';
import './ModalStyles.css';

const ModalComponent = ({ isOpen, closeModal, children }) => {
  useEffect(() => {
    // При відкритті модального вікна приховати скролл на фоні
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    // Відновити скролл при закритті модального вікна
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => closeModal()}
      className="modal-content"
      overlayClassName="modal-overlay"
      contentLabel="Example Modal"
    >
      <button onClick={closeModal} className="close-button">
        <IoClose width="20" height="120" />
      </button>

      {/* <h2>Hello</h2> */}
      {children}
    </Modal>
  );
};

export default ModalComponent;
