import { Toaster } from 'react-hot-toast';
import NotFoundPage from 'pages/404';
import Account from 'pages/account';
import Signin from 'pages/auth/signin';
import Signup from 'pages/auth/signup';
import Home from 'pages/home';
import SingleTour from 'pages/tours/[tourId]';
import { Routes, Route } from 'react-router-dom';
import NotLoggedInRoutes from 'routes/NotLoggedInRoutes';
import LoggedInRoutes from 'routes/LoggedInRoutes';

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours/:tourId" element={<SingleTour />} />
        <Route element={<NotLoggedInRoutes />}>
          <Route path="/auth/signin" element={<Signin />} />
          <Route path="/auth/signup" element={<Signup />} />
        </Route>
        <Route element={<LoggedInRoutes />}>
          <Route path="/account" element={<Account />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
