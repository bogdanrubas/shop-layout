import React from "react";
import GlobalStyle from "../config/globalStyles";
import Header from 'layout/Header';
import Footer from 'layout/Footer';

const Layout = (props: any) =>
   (
    <>
      <GlobalStyle />
			<Header />
      {props.children}
			<Footer />
    </>
  )
;

export default Layout;
