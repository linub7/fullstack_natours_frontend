export const signinValidation = ({ email, password }) => {
  const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!email.trim()) return { ok: false, error: 'Email is required' };
  if (!isValidEmail.test(email))
    return { ok: false, error: 'Email is not valid' };

  if (!password.trim()) return { ok: false, error: 'Password is required' };
  if (password.length < 8)
    return { ok: false, error: 'Password must be at least 8 characters' };

  return { ok: true };
};
