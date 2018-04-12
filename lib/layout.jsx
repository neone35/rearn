import React from 'react';
import Header from '../components/Header';
import Head from 'next/head';
import { layoutStyle } from '../components/SharedStyles';

const Layout = ({ children, title = 'Default title' }) => (
  <div style={layoutStyle}>
    <Head>
      <title>{ title }</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {children}
    <footer>
      <span />
    </footer>
  </div>
);

export default Layout;
