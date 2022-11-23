const InputItem = ({
  label,
  name,
  type,
  value,
  required,
  placeholder,
  handleChange = () => {},
}) => {
  return (
    <>
      <label className="form__label" htmlFor={name}>
        {label}
      </label>
      <input
        className="form__input"
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default InputItem;
