import { useAuth } from 'hooks';
import Signin from 'pages/auth/signin';

import { Outlet } from 'react-router-dom';

export default function LoggedInRoutes() {
  const { auth } = useAuth();
  return auth?.token ? <Outlet /> : <Signin />;
}
