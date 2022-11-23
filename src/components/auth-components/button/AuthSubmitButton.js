import { useLoading } from 'hooks';

const AuthSubmitButton = ({ btnTitle, handleClick, validationError }) => {
  const { loading } = useLoading();
  return (
    <div className="form__group">
      <button
        className="btn btn--green"
        onClick={handleClick}
        disabled={loading || validationError}
      >
        {loading ? 'Loading...' : btnTitle}
      </button>
    </div>
  );
};

export default AuthSubmitButton;
