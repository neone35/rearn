import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';
import rearnTheme from './rearnTheme';

class Layout extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={rearnTheme}>
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
      </MuiThemeProvider>
    );
  }
}

export default Layout;
