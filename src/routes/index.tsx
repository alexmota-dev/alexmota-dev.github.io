import React, { useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { EnvelopCarousel } from '../components/Carousel/main';
import { AuthContext } from '../contexts/auth';

export const Routes = () => {
  const { signed } = useContext(AuthContext);

  return <RouterProvider router={signed ? signedRoutes : otherRoutes} />;
};

const signedRoutes = createBrowserRouter([
  { path: "/", element: <Home/>},
  { path: "/about",element: <div>About Us</div>,},
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/carousel", element: <EnvelopCarousel /> },
]);

const otherRoutes = createBrowserRouter([
  { path: "/", element: <Home/> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);