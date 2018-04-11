import React from 'react';
import Header from '../components/Header';
import { layoutStyle } from '../components/SharedStyles';

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;
