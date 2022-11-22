const InputItem = ({ label, name, type, value, required, placeholder }) => {
  return (
    <>
      <label className="form__label" htmlFor={name}>
        {label}
      </label>
      <input
        className="form__input"
        id={name}
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
      />
    </>
  );
};

export default InputItem;
