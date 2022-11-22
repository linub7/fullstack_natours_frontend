import PasswordUpdateInputItem from 'components/account-components/account-update/password/PasswordUpdateInputItem';
import InputItem from 'components/account-components/account-update/user-info/InputItem';
import AuthSubmitButton from '../button/AuthSubmitButton';
import CommonAuthLayout from '../layout/CommonAuthLayout';

const SigninComponent = () => {
  return (
    <CommonAuthLayout title={'Log into your account'}>
      <form className="form">
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
            minlength={8}
            required={true}
            type={'password'}
          />
        </div>
        <AuthSubmitButton btnTitle={'Login'} />
      </form>
    </CommonAuthLayout>
  );
};

export default SigninComponent;
