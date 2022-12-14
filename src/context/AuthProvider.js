import { createContext, useState, useEffect } from 'react';
import Cookie from 'js-cookie';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: '',
  });

  useEffect(() => {
    if (Cookie.get('auth')) {
      setAuth(JSON.parse(Cookie.get('auth')));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
