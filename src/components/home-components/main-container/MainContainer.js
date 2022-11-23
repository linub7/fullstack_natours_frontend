import PageSpinner from 'components/shared/spinner/page-spinner/PageSpinner';
import Card from '../card/Card';
import './style.css';

const MainContainer = ({ loading }) => {
  return (
    <div className="main">
      {loading ? (
        <div className="page-loader">
          <PageSpinner />
        </div>
      ) : (
        <div className="card-container">
          <Card />
        </div>
      )}
    </div>
  );
};

export default MainContainer;
