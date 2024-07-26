import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import ContactForm from '../../components/ContactForm/ContactForm';
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

const ContactsPage = () => {
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

        <button
          type="button"
          className={style.btn}
          // onClick={() => dispatch(logout())}
        >
          <MdOutlineAdd size={30} />
          <span className={style.tooltiptext}>Add Contact</span>
        </button>
      </div>

      <ContactList />
      {isLoading && <Loader />}
    </>
  );
};
export default ContactsPage;
