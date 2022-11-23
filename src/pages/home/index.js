import { useEffect, useState } from 'react';
import MainContainer from 'components/home-components/main-container/MainContainer';
import CommonLayout from 'components/shared/CommonLayout';
import { getAllToursHandler } from 'api/tours';

const Home = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    getAllTours();
    return () => {
      setTours([]);
    };
  }, []);

  const getAllTours = async () => {
    const { data, err } = await getAllToursHandler();
    if (err) {
      console.log(err);
      return;
    }
    if (data?.status === 'success') setTours(data?.data?.data);
  };

  return (
    <CommonLayout>
      <MainContainer />
    </CommonLayout>
  );
};

export default Home;
