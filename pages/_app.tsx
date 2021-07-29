import React from 'react';
import Head from "next/head";
import GlobalStyle from "../config/globalStyles";
import type { AppProps } from 'next/app';
import Header from 'layout/Header';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bots</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </Head>

      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;