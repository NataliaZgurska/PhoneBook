// import { useSelector } from 'react-redux';
// import Contact from '../Contact/Contact';
// import { selectFilteredContacts } from '../../redux/filters/selectors';
// import css from './ContactList.module.css';

// const ContactList = () => {
//   const filteredContacts = useSelector(selectFilteredContacts);

//   const sortedContacts = filteredContacts.slice().sort((a, b) => {
//     return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
//   });

//   return (
//     <ul className={css.contactList}>
//       {Array.isArray(filteredContacts) &&
//         sortedContacts.map(contact => {
//           return (
//             <li className={css.contactItem} key={contact.id}>
//               <Contact contact={contact} />
//             </li>
//           );
//         })}
//     </ul>
//   );
// };
// export default ContactList;

import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import Contact from '../Contact/Contact';
import { selectFilter } from '../../redux/filters/selectors';
import { selectContacts } from '../../redux/contacts/selectors';

import css from './ContactList.module.css';

const ContactList = () => {
  const allContacts = useSelector(selectContacts);
  const filterName = useSelector(selectFilter);

  const sortedContacts = useMemo(() => {
    if (Array.isArray(allContacts)) {
      const filteredContacts = allContacts.filter(contact =>
        contact.name.toLowerCase().includes(filterName.toLowerCase())
      );
      return filteredContacts
        .slice()
        .sort((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        );
    } else {
      return [];
    }
  }, [allContacts, filterName]);

  return (
    <div>
      {allContacts.length > 0 ? (
        <ul className={css.contactList}>
          {sortedContacts.map(contact => (
            <li className={css.contactItem} key={contact._id}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      ) : (
        <h2 className={css.noContacts}>Add your first contact</h2>
      )}
    </div>
  );
};
export default ContactList;
