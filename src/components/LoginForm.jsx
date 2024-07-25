import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { MIN_CHAR_PASSWORD_VALIDATION } from '../utils/constants';

import { login } from '../redux/auth/operations';
import css from './RegistrationForm/RegistrationForm.module.css';

const FORM_INITIAL_VALUES = {
  email: '',
  password: '',
};

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email address is required!')
    .email('You must enter valid email address!'),
  password: Yup.string()
    .required('Password is required!')
    .min(
      MIN_CHAR_PASSWORD_VALIDATION,
      `Your password must be greater than ${MIN_CHAR_PASSWORD_VALIDATION} characters!`
    ),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <div className={css.wrap}>
      <div className={css.formBackground}>
        <Formik
          initialValues={FORM_INITIAL_VALUES}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          <Form className={css.form}>
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
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
