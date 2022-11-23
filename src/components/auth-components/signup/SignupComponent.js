import Cookie from 'js-cookie';
import toast from 'react-hot-toast';
import PasswordUpdateInputItem from 'components/account-components/account-update/password/PasswordUpdateInputItem';
import InputItem from 'components/account-components/account-update/user-info/InputItem';
import { useAuth, useLoading } from 'hooks';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupValidation } from 'utils/signupValidation';
import AuthSubmitButton from '../button/AuthSubmitButton';
import CommonAuthLayout from '../layout/CommonAuthLayout';
import { signupHandler } from 'api/auth';

const SignupComponent = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [validationError, setValidationError] = useState('');

  const navigate = useNavigate();

  const { setLoading } = useLoading();
  const { setAuth } = useAuth();

  const handleChangeInput = (e) => {
    const {
      target: { value, name },
    } = e;

    setValues({ ...values, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const { ok, error: validateError } = signupValidation(values);
    if (!ok) {
      setLoading(false);
      setValidationError(validateError);
      setTimeout(() => {
        setValidationError('');
      }, 2000);
      return toast.error(validateError);
    }

    setLoading(true);
    const { data, err } = await signupHandler(
      values?.name,
      values?.email,
      values?.password,
      values?.passwordConfirm
    );
    if (err) {
      toast.error(err?.message);
      setLoading(false);
      return;
    }
    setLoading(false);

    if (data?.status === 'success') {
      toast.success('Successfully registered ✔️');
      const {
        token,
        data: { user },
      } = data;
      setAuth({ token, user });
      Cookie.set('auth', JSON.stringify({ token, user }));
      setValues({ name: '', email: '', password: '', passwordConfirm: '' });
      setTimeout(() => {
        navigate('/');
      }, 1500);
    }
  };

  return (
    <CommonAuthLayout title={'CREATE YOUR ACCOUNT!'}>
      <form className="form">
        <div className="form__group">
          <InputItem
            label={'Your Name'}
            name={'name'}
            required={true}
            type={'text'}
            placeholder={'Please enter your name'}
            value={values?.name}
            handleChange={handleChangeInput}
          />
        </div>
        <div className="form__group">
          <InputItem
            label={'Email address'}
            name={'email'}
            required={true}
            type={'email'}
            placeholder={'you@example.com'}
            value={values?.email}
            handleChange={handleChangeInput}
          />
        </div>
        <div className="form__group ma-bt-md">
          <PasswordUpdateInputItem
            id={'password'}
            label={'Password'}
            minLength={8}
            required={true}
            type={'password'}
            name={'password'}
            value={values?.password}
            handleChange={handleChangeInput}
          />
        </div>
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
        <AuthSubmitButton
          btnTitle={'Register'}
          handleClick={handleSignup}
          validationError={validationError}
        />
      </form>
    </CommonAuthLayout>
  );
};

export default SignupComponent;
