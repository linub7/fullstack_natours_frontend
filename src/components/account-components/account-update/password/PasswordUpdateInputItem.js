const PasswordUpdateInputItem = ({ label, id, type, required, minLength }) => {
  return (
    <div className="form__group">
      <label className="form__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="form__input"
        id={id}
        type={type}
        placeholder="••••••••"
        required={required}
        minLength={minLength}
      />
    </div>
  );
};

export default PasswordUpdateInputItem;
