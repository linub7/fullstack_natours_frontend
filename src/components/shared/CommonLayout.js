import FooterComponent from './footer/FooterComponent';
import HeaderComponent from './header/HeaderComponent';

const CommonLayout = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      <div>{children}</div>
      <FooterComponent />
    </>
  );
};

export default CommonLayout;
