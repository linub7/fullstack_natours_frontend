import { Toaster } from 'react-hot-toast';
import NotFoundPage from 'pages/404';
import Account from 'pages/account';
import Signin from 'pages/auth/signin';
import Signup from 'pages/auth/signup';
import Home from 'pages/home';
import SingleTour from 'pages/tours/[tourId]';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours/:tourId" element={<SingleTour />} />
        <Route path="/account" element={<Account />} />

        <Route path="/auth/signin" element={<Signin />} />
        <Route path="/auth/signup" element={<Signup />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
