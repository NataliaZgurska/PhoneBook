import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import ContactForm from '../../components/ContactAddForm/ContactAddForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import { clearFilter } from '../../redux/filters/slice';
import { MdOutlineAdd } from 'react-icons/md';

import css from './ContactsPage.module.css';
import style from '../../services/btn.module.css';
import Modal from 'react-modal';
import ContactAddModal from '../../components/ContactAddModal/ContactAddModal';

// Modal.setAppElement('#root');

const ContactsPage = () => {
  // *****модальне вікно****
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  // *******

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
    dispatch(clearFilter());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <h2 className={css.title}>Phonebook</h2>
      {error && <ErrorMessage title={error} />}

      {/* <div className={css.formsContainer}>
        <ContactForm />
        {isLoading && !error && (
          <b style={{ color: 'green' }}>Request in progress...</b>
        )}
        <SearchBox />
      </div> */}

      <div className={css.formsContainer}>
        <SearchBox />

        {/* виклик модального вікна */}
        <button type="button" className={style.btn} onClick={openModal}>
          <MdOutlineAdd size={30} />
          <span className={style.tooltiptext}>Add Contact</span>
        </button>

        {/* <ModalComponent isOpen={modalIsOpen} closeModal={closeModal} /> */}
        <ContactAddModal isOpen={modalIsOpen} closeModal={closeModal} />
      </div>

      <ContactList />
      {isLoading && <Loader />}
    </>
  );
};
export default ContactsPage;
