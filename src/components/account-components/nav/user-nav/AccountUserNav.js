import { ReactComponent as SettingsIcon } from 'assets/svg/settings.svg';
import { ReactComponent as BriefCaseIcon } from 'assets/svg/briefcase.svg';
import { ReactComponent as StarIcon } from 'assets/svg/star-icon.svg';
import { ReactComponent as BillingIcon } from 'assets/svg/credit-card.svg';
import NavItem from '../NavItem';

const AccountUserNav = () => {
  return (
    <ul className="side-nav">
      <NavItem label={'Settings'}>
        <SettingsIcon />
      </NavItem>
      <NavItem label={'My Bookings'}>
        <BriefCaseIcon />
      </NavItem>
      <NavItem label={'My Reviews'}>
        <StarIcon />
      </NavItem>
      <NavItem label={'Billing'}>
        <BillingIcon />
      </NavItem>
    </ul>
  );
};

export default AccountUserNav;
