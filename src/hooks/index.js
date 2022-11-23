import { AuthContext } from 'context/AuthProvider';
import { useContext } from 'react';

export const useAuth = () => useContext(AuthContext);
