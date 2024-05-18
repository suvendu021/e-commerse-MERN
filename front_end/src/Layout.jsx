/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const Layout = ({ Component }) => {
  return (
    <>
      <Header />
      <main className="min-h-[900px] md:min-h-[600px]">
        <Component />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
