import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import MainPage from '../components/MainPage';
import ContactUs from '../components/ContactUs/ContactUs';
import AboutUs from '../components/AboutUs';
import Layout from './Layout';
import Products from '../components/Products';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <AboutUs />,
      },
      {
        path: "login",
        element: <LoginFormPage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
      {
        path: "contact",
        element: <ContactUs />
      },
      {
        path: "about",
        element: <AboutUs />
      },
      {
        path: "products",
        element: <Products />
      }
    ],
  },
]);
