import Head from "next/head";
import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

interface IProps {
  children: React.ReactNode;
  title: string;
  desctiption: string;
}

const Layout: React.FC<IProps> = ({ children, title, desctiption }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desctiption} />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <main className="pt-40 mb-20">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
