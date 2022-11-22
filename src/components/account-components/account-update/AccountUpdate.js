import PasswordUpdate from './password/PasswordUpdate';
import UserInfoUpdate from './user-info/UserInfoUpdate';

const AccountUpdate = () => {
  return (
    <div className="user-view__content">
      <UserInfoUpdate />
      <div className="line">&nbsp;</div>
      <PasswordUpdate />
    </div>
  );
};

export default AccountUpdate;
