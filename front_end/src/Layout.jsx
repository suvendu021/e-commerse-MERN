/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Helmet } from "react-helmet";

const Layout = ({ Component, title, description, keywords }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Suvendu" />
      </Helmet>
      <Header />
      <main className="min-h-[780px] md:min-h-[600px] mb-12">
        <Component />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
