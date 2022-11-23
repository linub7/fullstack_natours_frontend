import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Cookie from 'js-cookie';
import Logo from 'assets/images/logo-white.png';
import DefaultUser from 'assets/images/users/default.jpg';
import './style.css';
import { useAuth } from 'hooks';
import { signoutHandler } from 'api/auth';

const HeaderComponent = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const handleNavigateTo = (path) => {
    navigate(path);
  };

  const handleSignout = async () => {
    const { err } = await signoutHandler(auth?.token);
    if (err) {
      console.log(err);
      toast.error(err?.message);
      return;
    }
    Cookie.remove('auth');
    setAuth({ token: '', user: null });
    window.location.reload();
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
          <>
            <Link to="/account" className="nav__el">
              <img src={DefaultUser} alt="User" className="nav__user-img" />
              <span>{auth?.user?.name}</span>
            </Link>
            <button className="nav__el" onClick={handleSignout}>
              Logout
            </button>
          </>
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
