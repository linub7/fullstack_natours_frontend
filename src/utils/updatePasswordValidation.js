export const updatePasswordValidation = ({
  oldPassword,
  password,
  passwordConfirm,
}) => {
  if (!oldPassword.trim())
    return { ok: false, error: 'Current Password is required' };
  if (oldPassword.length < 8)
    return {
      ok: false,
      error: 'Current Password must be at least 8 characters',
    };

  if (!password.trim()) return { ok: false, error: 'Password is required' };
  if (password.length < 8)
    return { ok: false, error: 'Password must be at least 8 characters' };

  if (!passwordConfirm.trim())
    return { ok: false, error: 'PasswordConfirm is required' };
  if (passwordConfirm.length < 8)
    return {
      ok: false,
      error: 'PasswordConfirm must be at least 8 characters',
    };

  if (password !== passwordConfirm)
    return {
      ok: false,
      error: 'Password and passwordConfirm must be the same',
    };

  return { ok: true };
};
