import AccountUpdateButton from 'components/account-components/account-update/button/AccountUpdateButton';
import InputItem from './InputItem';

const UserInfoUpdate = () => {
  return (
    <div className="user-view__form-container">
      <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
      <form className="form form-user-data">
        <div className="form__group">
          <InputItem
            label={'Name'}
            name={'name'}
            type="text"
            required={true}
            value={'Jonas'}
            placeholder={'Enter your name'}
          />
        </div>
        <div className="form__group ma-bt-md">
          <InputItem
            label={'Email Address'}
            name={'email'}
            type={'email'}
            value={'admin@natours.io'}
            required={true}
            placeholder={'Enter your Email'}
          />
        </div>
        {/* TODO */}
        {/* <div className="form__group form__photo-upload">
          <img className="form__user-photo" src="img/user.jpg" alt="User photo" />
          <a className="btn-text" href="">
            Choose new photo
          </a>
        </div> */}
        <AccountUpdateButton btnTitle={'Save settings'} />
      </form>
    </div>
  );
};

export default UserInfoUpdate;
