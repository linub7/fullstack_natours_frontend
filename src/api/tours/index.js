import client from '../client';

export const handleGetAllTours = async () => {
  try {
    const { data } = await client.get(`/tours`);
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data };
  }
};
