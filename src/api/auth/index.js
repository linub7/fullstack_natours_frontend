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

export const forgotPasswordHandler = async (email) => {
  try {
    const { data } = await client.post(`/auth/forgot-password`, {
      email,
    });
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data };
  }
};

export const resetPasswordHandler = async (
  password,
  passwordConfirm,
  token
) => {
  try {
    const { data } = await client.patch(`/auth/reset-password/${token}`, {
      password,
      passwordConfirm,
    });
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data };
  }
};

export const signoutHandler = async (token) => {
  try {
    const { data } = await client.get(`/auth/signout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data };
  }
};

export const updateUserInfoHandler = async (formData, token) => {
  try {
    const { data } = await client.patch(`/me/update`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data };
  }
};

export const updateUserPasswordHandler = async (
  oldPassword,
  password,
  passwordConfirm,
  token
) => {
  try {
    const { data } = await client.patch(
      `/auth/update-my-password`,
      { oldPassword, password, passwordConfirm },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return { data };
  } catch (error) {
    const { response } = error;
    return { err: response?.data };
  }
};
