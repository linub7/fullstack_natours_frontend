import AccountUpdateButton from '../button/AccountUpdateButton';
import PasswordUpdateInputItem from './PasswordUpdateInputItem';

const PasswordUpdate = () => {
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
        />
        <PasswordUpdateInputItem
          label={'New password'}
          id={'password'}
          type={'password'}
          required={true}
          minLength={8}
        />
        <div className="ma-bt-lg">
          <PasswordUpdateInputItem
            label={'Confirm password'}
            id={'password-confirm'}
            type={'password'}
            required={true}
            minLength={8}
          />
        </div>
        <AccountUpdateButton btnTitle={'Save Password'} />
      </form>
    </div>
  );
};

export default PasswordUpdate;
