import { Link, useNavigate } from 'react-router-dom';
import Logo from 'assets/images/logo-white.png';
import DefaultUser from 'assets/images/users/default.jpg';
import './style.css';
import { useAuth } from 'hooks';

const HeaderComponent = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  const handleNavigateTo = (path) => {
    navigate(path);
  };
  return (
    <header className="header">
      <nav className="nav nav--tours">
        <Link to="/" className="nav__el">
          All tours
        </Link>
        <form className="nav__search">
          {/* <button className="nav__search-btn">
            <svg>
              <use
                xlink:href={'../../../assets/images/icons.svg#icon-search'}
              ></use>
            </svg>
          </button> */}
          {/* <input
            type="text"
            placeholder="Search tours"
            className="nav__search-input"
          /> */}
        </form>
      </nav>
      <div className="header__logo">
        <img src={Logo} alt="Natours logo" />
      </div>
      <nav className="nav nav--user">
        {/* <Link to="/" className="nav__el">
          My bookings
        </Link> */}
        {auth?.token ? (
          <Link to="/" className="nav__el">
            <img src={DefaultUser} alt="User" className="nav__user-img" />
            <span>Jonas</span>
          </Link>
        ) : (
          <>
            <button
              className="nav__el"
              onClick={() => handleNavigateTo('/auth/signin')}
            >
              Log in
            </button>
            <button
              className="nav__el nav__el--cta"
              onClick={() => handleNavigateTo('/auth/signup')}
            >
              Sign up
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default HeaderComponent;
