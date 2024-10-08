import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { addContact } from '../../redux/contacts/operations';

import {
  MAX_CHAR_NAME_VALIDATION,
  MIN_CHAR_NAME_VALIDATION,
} from '../../utils/constants';

import css from './ContactAddForm.module.css';

const FORM_INITIAL_VALUES = {
  name: '',
  number: '',
};

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(MIN_CHAR_NAME_VALIDATION, 'Too Short!')
    .max(MAX_CHAR_NAME_VALIDATION, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const ContactAddForm = ({ closeModal }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    try {
      const result = await dispatch(addContact(values));
      if (result.meta.requestStatus === 'fulfilled') {
        actions.resetForm();
        closeModal();
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast.error('An error occurred while submitting the form');
    }
    actions.resetForm();
  };

  return (
    <div className={css.formContainer}>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        validationSchema={FormSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.formAdd}>
          <label className={css.formLabel}>
            <Field type="text" name="name" placeholder="name" />

            <ErrorMessage
              className={css.errorMessage}
              component="p"
              name="name"
            />
          </label>

          <label className={css.formLabel}>
            <Field type="number" name="number" placeholder="number" />

            <ErrorMessage
              className={css.errorMessage}
              component="p"
              name="number"
            />
          </label>

          <button type="submit" className="formBtn">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactAddForm;
