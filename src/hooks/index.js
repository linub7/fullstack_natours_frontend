import { AuthContext } from 'context/AuthProvider';
import { LoadingContext } from 'context/LoadingProvider';
import { useContext } from 'react';

export const useAuth = () => useContext(AuthContext);
export const useLoading = () => useContext(LoadingContext);
