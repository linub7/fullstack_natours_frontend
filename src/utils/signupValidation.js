export const signupValidation = ({
  name,
  email,
  password,
  passwordConfirm,
}) => {
  const isValidName = /^[a-z A-Z]+$/;
  const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!name.trim()) return { ok: false, error: 'Name is required' };
  if (!isValidName.test(name))
    return { ok: false, error: 'Name must be only letters' };

  if (!email.trim()) return { ok: false, error: 'Email is required' };
  if (!isValidEmail.test(email))
    return { ok: false, error: 'Email is not valid' };

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
