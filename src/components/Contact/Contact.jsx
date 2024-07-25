import { FaPhone } from 'react-icons/fa6';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/contacts/operations';

import css from './Contact.module.css';

const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.contactContainer}>
      <p className={css.contactName}>{name}</p>

      <p className={css.contactPhoneNumber}>
        <FaPhone />
        {number}
      </p>

      <button onClick={handleDelete} className={css.deleteBtn}>
        <MdDeleteForever size={36} color="#2f85e2" />
      </button>
    </div>
  );
};

export default Contact;
