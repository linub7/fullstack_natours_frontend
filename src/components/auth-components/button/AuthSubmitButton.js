import ButtonSpinner from 'components/shared/spinner/button-spinner/ButtonSpinner';
import { useLoading } from 'hooks';

const AuthSubmitButton = ({ btnTitle, handleClick, validationError }) => {
  const { loading } = useLoading();
  return (
    <div className="form__group">
      {loading ? (
        <ButtonSpinner />
      ) : (
        <button
          className="btn btn--green"
          onClick={handleClick}
          disabled={loading || validationError}
        >
          {btnTitle}
        </button>
      )}
    </div>
  );
};

export default AuthSubmitButton;
