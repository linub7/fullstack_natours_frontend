import toast from 'react-hot-toast';
import { signinHandler } from 'api/auth';
import Cookie from 'js-cookie';
import PasswordUpdateInputItem from 'components/account-components/account-update/password/PasswordUpdateInputItem';
import InputItem from 'components/account-components/account-update/user-info/InputItem';
import { useAuth, useLoading } from 'hooks';
import { useState } from 'react';
import AuthSubmitButton from '../button/AuthSubmitButton';
import CommonAuthLayout from '../layout/CommonAuthLayout';
import { signinValidation } from 'utils/signinValidation';
import { Link, useNavigate } from 'react-router-dom';

const SigninComponent = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
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

  const handleSignin = async (e) => {
    e.preventDefault();

    const { ok, error: validateError } = signinValidation(values);
    if (!ok) {
      setLoading(false);
      setValidationError(validateError);
      setTimeout(() => {
        setValidationError('');
      }, 2000);
      return toast.error(validateError);
    }

    setLoading(true);
    const { data, err } = await signinHandler(values?.email, values?.password);
    if (err) {
      toast.error(err?.message);
      setLoading(false);
      return;
    }
    setLoading(false);
    if (data?.status === 'success') {
      toast.success('Successfully signed in ✔️');
      const {
        token,
        data: { user },
      } = data;
      setAuth({ token, user });
      Cookie.set('auth', JSON.stringify({ token, user }));
      setValues({ email: '', password: '' });
      setTimeout(() => {
        navigate('/');
      }, 1500);
    }
  };

  return (
    <CommonAuthLayout title={'Log into your account'}>
      <form className="form">
        <div className="form__group">
          <InputItem
            label={'Email address'}
            name={'email'}
            required={true}
            type={'email'}
            value={values?.email}
            handleChange={handleChangeInput}
            placeholder={'you@example.com'}
          />
        </div>
        <div className="form__group ma-bt-md">
          <PasswordUpdateInputItem
            id={'password'}
            label={'Password'}
            minlength={8}
            required={true}
            type={'password'}
            name="password"
            value={values?.password}
            handleChange={handleChangeInput}
          />
        </div>
        <AuthSubmitButton
          btnTitle={'Login'}
          handleClick={handleSignin}
          validationError={validationError}
        />
      </form>
      <Link className="forgot__text" to={'/auth/forgot-password'}>
        Forgot Your Password?
      </Link>
    </CommonAuthLayout>
  );
};

export default SigninComponent;
