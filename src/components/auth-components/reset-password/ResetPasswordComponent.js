import { useState } from 'react';
import PasswordUpdateInputItem from 'components/account-components/account-update/password/PasswordUpdateInputItem';
import AuthSubmitButton from '../button/AuthSubmitButton';
import CommonAuthLayout from '../layout/CommonAuthLayout';
import { useLoading } from 'hooks';
import { resetPasswordValidation } from 'utils/resetPasswordValidation';
import toast from 'react-hot-toast';
import { resetPasswordHandler } from 'api/auth';
import { useNavigate } from 'react-router-dom';

const ResetPasswordComponent = ({ token }) => {
  const [values, setValues] = useState({
    password: '',
    passwordConfirm: '',
  });
  const [validationError, setValidationError] = useState('');

  const navigate = useNavigate();

  const { setLoading } = useLoading();

  const handleChangeInput = (e) => {
    const {
      target: { value, name },
    } = e;
    setValues({ ...values, [name]: value });
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { ok, error: validateError } = resetPasswordValidation(values);
    if (!ok) {
      setLoading(false);
      setValidationError(validateError);
      setTimeout(() => {
        setValidationError('');
      }, 2000);
      return toast.error(validateError);
    }
    const { err, data } = await resetPasswordHandler(
      values?.password,
      values?.passwordConfirm,
      token
    );
    if (err) {
      setLoading(false);
      toast.error(err?.message);
      console.log(err);
      return;
    }
    if (data?.status === 'success') {
      setLoading(false);
      toast.success(
        'Your Password reset Successfully, please login with new password'
      );
      navigate('/auth/signin');
    }
    setLoading(false);
  };
  return (
    <CommonAuthLayout title={'Reset Your Password'}>
      <form className="form">
        <div className="form__group">
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
          <AuthSubmitButton
            btnTitle={'Save Password'}
            handleClick={handleResetPassword}
            validationError={validationError}
          />
        </div>
      </form>
    </CommonAuthLayout>
  );
};

export default ResetPasswordComponent;
