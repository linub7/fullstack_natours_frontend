const AuthSubmitButton = ({ btnTitle }) => {
  return (
    <div className="form__group">
      <button className="btn btn--green">{btnTitle}</button>
    </div>
  );
};

export default AuthSubmitButton;
