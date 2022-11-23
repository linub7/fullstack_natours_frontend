import { useEffect, useState } from 'react';
import MainContainer from 'components/home-components/main-container/MainContainer';
import CommonLayout from 'components/shared/CommonLayout';
import { getAllToursHandler } from 'api/tours';
import { useLoading } from 'hooks';

const Home = () => {
  const [tours, setTours] = useState([]);
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    getAllTours();
    return () => {
      setTours([]);
    };
  }, []);

  const getAllTours = async () => {
    setLoading(true);
    const { data, err } = await getAllToursHandler();
    if (err) {
      console.log(err);
      setLoading(false);
      return;
    }
    setLoading(false);
    if (data?.status === 'success') setTours(data?.data?.data);
  };

  return (
    <CommonLayout>
      <MainContainer loading={loading} />
    </CommonLayout>
  );
};

export default Home;
