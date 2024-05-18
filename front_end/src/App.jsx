/* eslint-disable no-unused-vars */
import React from "react";
import Home from "./components/body/Home";
import Layout from "./Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "./components/body/AboutUs";
import ContactUs from "./components/body/ContactUs";
import Cart from "./components/cart/Cart";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      element: <Layout Component={Home} />,
      path: "/",
    },
    {
      element: <Layout Component={AboutUs} />,
      path: "/about",
    },
    {
      element: <Layout Component={ContactUs} />,
      path: "/contact",
    },
    {
      element: <Layout Component={Cart} />,
      path: "/cart",
    },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default App;
