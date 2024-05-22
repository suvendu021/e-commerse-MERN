/* eslint-disable no-unused-vars */
import React from "react";
import Home from "./components/body/Home";
import Layout from "./Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "./components/body/AboutUs";
import ContactUs from "./components/body/ContactUs";
import Cart from "./components/cart/Cart";
import LogIn from "./components/body/LogIn";
import ErrorPage from "./components/utils/ErrorPage";
import { Toaster } from "react-hot-toast";
import AdminPanel from "./components/body/AdminPanel";
import { ProtectedRoute } from "./components/utils/ProtectedRoute";
import ForgotPassword from "./components/body/ForgotPassword";
import Product from "./components/body/Product";
import Category from "./components/body/Category";
import AdminInfo from "./components/body/AdminInfo";
import UsersDetail from "./components/body/UsersDetail";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      element: (
        <Layout
          Component={LogIn}
          title={`H & B - Login`}
          description={`Log in to H & B to manage your account, track orders, and access exclusive offers.`}
          keywords={`H & B login, account management, track orders, exclusive offers`}
        />
      ),
      path: "/",
      errorElement: <Layout Component={ErrorPage} />,
    },
    {
      element: (
        <Layout
          Component={Home}
          title={`H & B - Home`}
          description={`Welcome to H & B, your go-to online store for the latest fashion trends, accessories, and more.`}
          keywords={`H & B home, fashion, online store, latest trends, accessories`}
        />
      ),
      path: "/home",
      errorElement: <Layout Component={ErrorPage} />,
    },
    {
      element: (
        <Layout
          Component={AboutUs}
          title={`H & B - AboutUs`}
          description={`Learn more about H & B, our mission, values, and the team behind our online store.`}
          keywords={`H & B about us, company mission, company values, team`}
        />
      ),
      path: "/about",
      errorElement: <Layout Component={ErrorPage} />,
    },
    {
      element: (
        <Layout
          Component={ContactUs}
          title={`H & B - ContactUs`}
          description={`Get in touch with H & B for customer support, inquiries, or feedback. We're here to help!`}
          keywords={`H & B contact, customer support, inquiries, feedback`}
        />
      ),
      path: "/contact",
      errorElement: <Layout Component={ErrorPage} />,
    },
    {
      element: (
        <Layout
          Component={Cart}
          title={`H & B - cart`}
          description={`Review your selected items and proceed to checkout at H & B. Enjoy a seamless shopping experience.`}
          keywords={`H & B cart, checkout, shopping cart, online shopping`}
        />
      ),
      path: "/cart",
      errorElement: <Layout Component={ErrorPage} />,
    },
    {
      element: (
        <Layout
          Component={ForgotPassword}
          title={`H & B - forgot password`}
          description={`password reset based on question`}
          keywords={`reset password`}
        />
      ),
      path: "/forgot-password",
      errorElement: <Layout Component={ErrorPage} />,
    },
    {
      element: (
        <ProtectedRoute
          Component={() => (
            <Layout
              Component={AdminPanel}
              title="Admin Panel"
              description="Admin Panel for H & B"
              keywords="H & B admin, management"
            />
          )}
        />
      ),
      path: "/admin-panel",

      children: [
        {
          element: <Product />,
          path: "/admin-panel/product",
        },
        {
          element: <Category />,
          path: "/admin-panel/category",
        },
        {
          element: <UsersDetail />,
          path: "/admin-panel/users",
        },
        {
          element: <AdminInfo />,
          path: "/admin-panel/admin",
        },
      ],
      errorElement: <Layout Component={ErrorPage} />,
    },
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
      <Toaster />
    </>
  );
};

export default App;
