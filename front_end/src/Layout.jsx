/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const Layout = (props) => {
  const { Component } = props;
  return (
    <>
      <Header />
      <Component />
      <Footer />
    </>
  );
};

export default Layout;
