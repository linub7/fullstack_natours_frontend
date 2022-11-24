import Cookie from 'js-cookie';
import { updateUserInfoHandler } from 'api/auth';
import AccountUpdateButton from 'components/account-components/account-update/button/AccountUpdateButton';
import { useAuth, useLoading } from 'hooks';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import ImageInput from './ImageInput';
import InputItem from './InputItem';

const UserInfoUpdate = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    photo: null,
  });
  const [selectedProfileImage, setSelectedProfileImage] = useState('');

  const { auth, setAuth } = useAuth();
  const { setLoading, loading } = useLoading();

  useEffect(() => {
    setValues({ name: auth?.user?.name, email: auth?.user?.email });
  }, [auth?.user]);

  const handleChangeInput = (e) => {
    const {
      target: { value, name },
    } = e;

    if (name === 'name' || name === 'email') {
      setValues({ ...values, [name]: value });
    }
  };

  const updateProfileImage = (image) => {
    const url = URL.createObjectURL(image);
    setSelectedProfileImage(url);
  };

  const handleAddProfileImage = (e) => {
    if (!e.target.files[0].type.startsWith('image'))
      return toast.error('Invalid file type');

    const file = e.target.files[0];
    updateProfileImage(file);
    setValues({ ...values, photo: file });
  };

  const handleUpdateUserInfo = async (e) => {
    e.preventDefault();

    if (!values?.name.trim()) return toast.error('Please enter a name');
    if (!values?.email.trim()) return toast.error('Please enter a email');

    setLoading(true);

    const formData = new FormData();

    for (const key in values) {
      if (key) formData.append(key, values[key]);
    }

    const { data, err } = await updateUserInfoHandler(formData, auth?.token);
    if (err) {
      console.log(err);
      setLoading(false);
      toast.error(err?.message);
      return;
    }
    setLoading(false);
    setAuth({ ...auth, user: data?.data?.data });
    Cookie.remove('auth');
    Cookie.set(
      'auth',
      JSON.stringify({ token: auth?.token, user: data?.data?.data })
    );
    toast.success('Your Account updated Successfully 👍');
  };

  return (
    <div className="user-view__form-container">
      <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
      <form className="form form-user-data">
        <div className="form__group">
          <InputItem
            label={'Name'}
            name={'name'}
            type="text"
            required={true}
            placeholder={'Enter your name'}
            value={values?.name}
            handleChange={handleChangeInput}
          />
        </div>
        <div className="form__group ma-bt-md">
          <InputItem
            label={'Email Address'}
            name={'email'}
            type={'email'}
            required={true}
            placeholder={'Enter your Email'}
            value={values?.email}
            handleChange={handleChangeInput}
          />
        </div>
        <div className="form__group ma-bt-md">
          <ImageInput
            name={'photo'}
            selectedProfileImage={selectedProfileImage}
            handleAddProfileImage={handleAddProfileImage}
            className={'form__user-photo'}
          />
        </div>
        <AccountUpdateButton
          btnTitle={'Save settings'}
          handleClick={handleUpdateUserInfo}
        />
      </form>
    </div>
  );
};

export default UserInfoUpdate;
