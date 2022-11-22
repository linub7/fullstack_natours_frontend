import { ReactComponent as MapIcon } from 'assets/svg/map.svg';
import { ReactComponent as UserIcon } from 'assets/svg/user.svg';
import { ReactComponent as StarIcon } from 'assets/svg/star-icon.svg';
import { ReactComponent as BriefCaseIcon } from 'assets/svg/briefcase.svg';
import NavItem from '../NavItem';

const AccountAdminNav = () => {
  return (
    <div className="admin-nav">
      <h5 className="admin-nav__heading">Admin</h5>
      <ul className="side-nav">
        <NavItem label={'Manage tours'}>
          <MapIcon />
        </NavItem>
        {/* <li>
          <a href="#">
            <svg>
              <use xlink:href="img/icons.svg#icon-map"></use>
            </svg>
            Manage tours
          </a>
        </li> */}
        <NavItem label={'Manage users'}>
          <UserIcon />
        </NavItem>
        {/* <li>
          <a href="#">
            <svg>
              <use xlink:href="img/icons.svg#icon-users"></use>
            </svg>
            Manage users
          </a>
        </li> */}
        <NavItem label={'Manage reviews'}>
          <StarIcon />
        </NavItem>
        {/* <li>
          <a href="#">
            <svg>
              <use xlink:href="img/icons.svg#icon-star"></use>
            </svg>
            Manage reviews
          </a>
        </li> */}
        <NavItem label={'Briefcase'}>
          <BriefCaseIcon />
        </NavItem>
        {/* <li>
          <a href="#">
            <svg>
              <use xlink:href="img/icons.svg#icon-briefcase"></use>
            </svg>
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default AccountAdminNav;
