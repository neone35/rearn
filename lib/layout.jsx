import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';
import { layoutStyle } from '../components/SharedStyles';


class Layout extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <div style={layoutStyle}>
        <Head>
          <title>{this.props.title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header />
        {this.props.children}
        <footer>
          <span />
        </footer>
      </div>
    );
  }
}

export default Layout;
