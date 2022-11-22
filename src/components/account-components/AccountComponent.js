import AccountUpdate from './account-update/AccountUpdate';
import AccountNav from './nav/AccountNav';
import './style.css';

const AccountComponent = () => {
  return (
    <div className="main">
      <div className="user-view">
        <AccountNav />
        <AccountUpdate />
      </div>
    </div>
  );
};

export default AccountComponent;
