import Cookie from 'js-cookie';

import { Navigate, Outlet } from 'react-router-dom';

export default function OnlyAdminRoutes() {
  const auth = Cookie.get('auth') ? JSON.parse(Cookie.get('auth')) : null;
  return auth?.token && auth?.user?.role === 'admin' ? (
    <Outlet />
  ) : (
    <Navigate to={'/'} />
  );
}
