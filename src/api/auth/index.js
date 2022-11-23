import client from 'api/client';

export const signupHandler = async (name, email, password, passwordConfirm) => {
  try {
    const { data } = await client.post(`/auth/signup`, {
      name,
      email,
      password,
      passwordConfirm,
    });
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data };
  }
};

export const signinHandler = async (email, password) => {
  try {
    const { data } = await client.post(`/auth/signin`, { email, password });
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data };
  }
};
