import AccountAdminNav from './admin-nav/AccountAdminNav';
import AccountUserNav from './user-nav/AccountUserNav';

const AccountNav = () => {
  return (
    <nav className="user-view__menu">
      <AccountUserNav />
      <AccountAdminNav />
      {/* <div className="admin-nav">
        <h5 className="admin-nav__heading">Admin</h5>
        <ul className="side-nav">
          <li>
            <a href="#">
              <svg>
                <use xlink:href="img/icons.svg#icon-map"></use>
              </svg>
              Manage tours
            </a>
          </li>
          <li>
            <a href="#">
              <svg>
                <use xlink:href="img/icons.svg#icon-users"></use>
              </svg>
              Manage users
            </a>
          </li>
          <li>
            <a href="#">
              <svg>
                <use xlink:href="img/icons.svg#icon-star"></use>
              </svg>
              Manage reviews
            </a>
          </li>
          <li>
            <a href="#">
              <svg>
                <use xlink:href="img/icons.svg#icon-briefcase"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div> */}
    </nav>
  );
};

export default AccountNav;
