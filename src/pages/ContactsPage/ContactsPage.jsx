import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import ContactForm from '../../components/ContactAddForm/ContactAddForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';
import { MdOutlineAdd } from 'react-icons/md';
import { fetchContacts } from '../../redux/contacts/operations';
import { clearFilter } from '../../redux/filters/slice';
import { selectFilter } from '../../redux/filters/selectors';
import ContactAddModal from '../../components/ContactAddModal/ContactAddModal';

import css from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  // *****модальне вікно для додавання контакта****
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    if (filter) {
      dispatch(clearFilter());
    }
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  // *******

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

        <button type="button" className="btnSmall" onClick={openModal}>
          <MdOutlineAdd size={30} />
          <span className="tooltiptext">Add Contact</span>
        </button>

        <ContactAddModal isOpen={modalIsOpen} closeModal={closeModal} />
      </div>

      <ContactList />
      {isLoading && <Loader />}
    </>
  );
};
export default ContactsPage;
