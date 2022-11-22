import MainContainer from 'components/home-components/main-container/MainContainer';
import FooterComponent from 'components/shared/footer/FooterComponent';
import HeaderComponent from '../../components/shared/header/HeaderComponent';

const Home = () => {
  return (
    <div>
      <HeaderComponent />
      <MainContainer />
      <FooterComponent />
    </div>
  );
};

export default Home;
