import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import {
  MAX_CHAR_NAME_VALIDATION,
  MIN_CHAR_NAME_VALIDATION,
  MIN_CHAR_PASSWORD_VALIDATION,
} from '../../utils/constants';

import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';

const FORM_INITIAL_VALUES = {
  name: '',
  email: '',
  password: '',
};

const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(
      MIN_CHAR_NAME_VALIDATION,
      `Enter name more than ${MIN_CHAR_NAME_VALIDATION} characters!`
    )
    .max(
      MAX_CHAR_NAME_VALIDATION,
      `Enter name less than ${MAX_CHAR_NAME_VALIDATION} characters!`
    )
    .required('Required'),
  email: Yup.string()
    .required('Email address is required!')
    .email('You must enter valid email address!'),
  password: Yup.string()
    .required('Password is required!')
    .min(
      MIN_CHAR_PASSWORD_VALIDATION,
      `Enter password longer than ${MIN_CHAR_PASSWORD_VALIDATION} characters!`
    ),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <div className={css.wrap}>
      <div className={css.formBackground}>
        <Formik
          initialValues={FORM_INITIAL_VALUES}
          validationSchema={RegistrationSchema}
          onSubmit={handleSubmit}
        >
          <Form className={css.form}>
            <label className={css.formLabel}>
              <span>Name:</span>
              <Field
                type="text"
                name="name"
                // autoComplete="off"
                placeholder="name"
              />
              <ErrorMessage
                className={css.errorMessage}
                component="p"
                name="name"
              />
            </label>

            <label className={css.formLabel}>
              <span>Email:</span>
              <Field
                type="email"
                name="email"
                // autoComplete="off"
                placeholder="email"
              />
              <ErrorMessage
                className={css.errorMessage}
                component="p"
                name="email"
              />
            </label>
            <label className={css.formLabel}>
              <span>Password:</span>
              <Field
                type="password"
                name="password"
                // autoComplete="off"
                placeholder="password"
              />
              <ErrorMessage
                className={css.errorMessage}
                component="p"
                name="password"
              />
            </label>

            <button type="submit" className={css.formAddBtn}>
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm;
