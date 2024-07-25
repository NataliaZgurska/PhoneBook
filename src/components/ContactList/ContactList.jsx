import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/filters/selectors';
import css from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  const sortedContacts = filteredContacts.slice().sort((a, b) => {
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  });

  return (
    <ul className={css.contactList}>
      {Array.isArray(filteredContacts) &&
        sortedContacts.map(contact => {
          return (
            <li className={css.contactItem} key={contact.id}>
              <Contact contact={contact} />
            </li>
          );
        })}
    </ul>
  );
};
export default ContactList;
