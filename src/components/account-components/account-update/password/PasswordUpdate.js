import { updateUserPasswordHandler } from 'api/auth';
import { useAuth, useLoading } from 'hooks';
import Cookie from 'js-cookie';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { updatePasswordValidation } from 'utils/updatePasswordValidation';
import AccountUpdateButton from '../button/AccountUpdateButton';
import PasswordUpdateInputItem from './PasswordUpdateInputItem';

const PasswordUpdate = () => {
  const [values, setValues] = useState({
    oldPassword: '',
    password: '',
    passwordConfirm: '',
  });
  const [validationError, setValidationError] = useState('');

  const { setLoading } = useLoading();
  const { auth, setAuth } = useAuth();

  const handleChangeInput = (e) => {
    const {
      target: { name, value },
    } = e;

    setValues({ ...values, [name]: value });
  };

  const handleUpdateUserPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { ok, error: validateError } = updatePasswordValidation(values);
    if (!ok) {
      setLoading(false);
      setValidationError(validateError);
      setTimeout(() => {
        setValidationError('');
      }, 2000);
      return toast.error(validateError);
    }

    const { data, err } = await updateUserPasswordHandler(
      values?.oldPassword,
      values?.password,
      values?.passwordConfirm,
      auth?.token
    );

    if (err) {
      setLoading(false);
      console.log(err);
      toast.error(err?.message);
      return;
    }
    if (data?.status === 'success') {
      setLoading(false);
      toast.success('Your password updated successfully 👍');
      const {
        token,
        data: { user },
      } = data;
      setAuth({ token, user });
      Cookie.remove('auth');
      Cookie.set('auth', JSON.stringify({ token, user }));
      setValues({ oldPassword: '', password: '', passwordConfirm: '' });
    }
  };
  return (
    <div className="user-view__form-container">
      <h2 className="heading-secondary ma-bt-md">Password change</h2>
      <form className="form form-user-settings">
        <PasswordUpdateInputItem
          label={'Current password'}
          id={'password-current'}
          type={'password'}
          required={true}
          minLength={8}
          name={'oldPassword'}
          value={values?.oldPassword}
          handleChange={handleChangeInput}
        />
        <PasswordUpdateInputItem
          label={'New password'}
          id={'password'}
          type={'password'}
          required={true}
          minLength={8}
          name={'password'}
          value={values?.password}
          handleChange={handleChangeInput}
        />
        <div className="ma-bt-lg">
          <PasswordUpdateInputItem
            label={'Confirm password'}
            id={'password-confirm'}
            type={'password'}
            required={true}
            minLength={8}
            name={'passwordConfirm'}
            value={values?.passwordConfirm}
            handleChange={handleChangeInput}
          />
        </div>
        <AccountUpdateButton
          btnTitle={'Save Password'}
          handleClick={handleUpdateUserPassword}
          validationError={validationError}
        />
      </form>
    </div>
  );
};

export default PasswordUpdate;
