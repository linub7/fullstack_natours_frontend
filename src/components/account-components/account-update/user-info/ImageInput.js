import { useAuth } from 'hooks';

const ImageInput = ({
  name,
  className,
  selectedProfileImage,
  handleAddProfileImage,
}) => {
  const { auth } = useAuth();
  return (
    <div>
      <input
        className="form__input"
        id={name}
        type="file"
        accept="image/*"
        onChange={handleAddProfileImage}
        hidden
      />
      <label className="form__label" htmlFor={name}>
        {auth?.user?.photo?.url ? (
          <img
            src={auth?.user?.photo?.url}
            className={className}
            alt="Selected Poster"
          />
        ) : selectedProfileImage ? (
          <img
            src={selectedProfileImage}
            className={className}
            alt="Selected Poster"
          />
        ) : (
          <span>Select Your Avatar</span>
        )}
      </label>
    </div>
  );
};

export default ImageInput;
