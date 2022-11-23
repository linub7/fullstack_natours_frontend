const PasswordUpdateInputItem = ({
  label,
  id,
  type,
  required,
  minLength,
  name,
  value,
  handleChange = () => {},
}) => {
  return (
    <div className="form__group">
      <label className="form__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="form__input"
        name={name}
        id={id}
        type={type}
        placeholder="••••••••"
        required={required}
        minLength={minLength}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default PasswordUpdateInputItem;
