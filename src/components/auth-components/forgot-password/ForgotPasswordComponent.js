import { forgotPasswordHandler } from 'api/auth';
import InputItem from 'components/account-components/account-update/user-info/InputItem';
import { useLoading } from 'hooks';
import { useState } from 'react';
import toast from 'react-hot-toast';
import AuthSubmitButton from '../button/AuthSubmitButton';
import CommonAuthLayout from '../layout/CommonAuthLayout';

const ForgotPasswordComponent = () => {
  const [email, setEmail] = useState('');
  const [validationError, setValidationError] = useState('');

  const { setLoading } = useLoading();

  const handleChangeInput = (e) => setEmail(e.target.value);

  const handleSendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email) {
      setLoading(false);
      toast.error('Please enter an email');
      return;
    }
    const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!isValidEmail.test(email)) {
      setLoading(false);
      setValidationError('Please enter a valid email');
      setTimeout(() => {
        setValidationError('');
      }, 1500);
      toast.error('Please enter a valid email');
      return;
    }

    const { err, data } = await forgotPasswordHandler(email);

    if (err) {
      setLoading(false);
      console.log(err);
      toast.error(err?.message);
      return;
    }
    if (data?.status === 'success') {
      toast.success(data?.message);
    }
    setLoading(false);
  };
  return (
    <CommonAuthLayout title={'Forgot Your Password'}>
      <form className="form">
        <div className="form__group">
          <InputItem
            label={'Email address'}
            name={'email'}
            required={true}
            type={'email'}
            value={email}
            handleChange={handleChangeInput}
            placeholder={'you@example.com'}
          />
        </div>
        <AuthSubmitButton
          btnTitle={'Send email'}
          handleClick={handleSendEmail}
          validationError={validationError}
        />
      </form>
    </CommonAuthLayout>
  );
};

export default ForgotPasswordComponent;
