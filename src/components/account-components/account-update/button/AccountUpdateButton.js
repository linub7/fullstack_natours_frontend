import ButtonSpinner from 'components/shared/spinner/button-spinner/ButtonSpinner';
import { useLoading } from 'hooks';

const AccountUpdateButton = ({ btnTitle, handleClick, validationError }) => {
  const { loading } = useLoading();
  return (
    <div className="form__group right">
      {loading ? (
        <ButtonSpinner />
      ) : (
        <button
          className="btn btn--small btn--green"
          disabled={loading || validationError}
          onClick={handleClick}
        >
          {btnTitle}
        </button>
      )}
    </div>
  );
};

export default AccountUpdateButton;
