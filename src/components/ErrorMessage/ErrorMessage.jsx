import css from './ErrorMessage.module.css';
const ErrorMessage = ({ title }) => {
  return <h2 className={css.title}>{title}</h2>;
};

export default ErrorMessage;
