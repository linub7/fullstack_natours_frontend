import client from 'api/client';

export const handleSignup = async (name, email, password, passwordConfirm) => {
  try {
    const { data } = await client.post(`/auth/signup`, {
      name,
      email,
      password,
      passwordConfirm,
    });
    return data;
  } catch (error) {
    const { response } = error;
    return { err: response?.data };
  }
};

export const handleSignin = async (email, password) => {
  try {
    const { data } = await client.post(`/auth/signup`, { email, password });
    return data;
  } catch (error) {
    const { response } = error;
    return { err: response?.data };
  }
};
