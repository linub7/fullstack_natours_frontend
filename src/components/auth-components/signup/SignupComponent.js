import PasswordUpdateInputItem from 'components/account-components/account-update/password/PasswordUpdateInputItem';
import InputItem from 'components/account-components/account-update/user-info/InputItem';
import AuthSubmitButton from '../button/AuthSubmitButton';
import CommonAuthLayout from '../layout/CommonAuthLayout';

const SignupComponent = () => {
  return (
    <CommonAuthLayout title={'CREATE YOUR ACCOUNT!'}>
      <form className="form">
        <div className="form__group">
          <InputItem
            label={'Your Name'}
            name={'name'}
            required={true}
            type={'text'}
            value={'Jonas'}
            placeholder={'Please enter your name'}
          />
        </div>
        <div className="form__group">
          <InputItem
            label={'Email address'}
            name={'email'}
            required={true}
            type={'email'}
            value={'io'}
            placeholder={'you@example.com'}
          />
        </div>
        <div className="form__group ma-bt-md">
          <PasswordUpdateInputItem
            id={'password'}
            label={'Password'}
            minLength={8}
            required={true}
            type={'password'}
          />
        </div>
        <div className="ma-bt-lg">
          <PasswordUpdateInputItem
            label={'Confirm password'}
            id={'password-confirm'}
            type={'password'}
            required={true}
            minLength={8}
          />
        </div>
        <AuthSubmitButton btnTitle={'Register'} />
      </form>
    </CommonAuthLayout>
  );
};

export default SignupComponent;
