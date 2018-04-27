import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';
import rearnTheme from './rearnTheme';

class Layout extends React.Component {
  renderRoot() {
    let layoutContent = null;
    const { isMobile } = this.props.agent;
    layoutContent = (
      <div style={isMobile ?
          { width: '100%' }
          :
          { width: '80%', margin: '0 auto' }}
      >
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
    return layoutContent;
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={rearnTheme(this.props.agent)}>
        {this.renderRoot()}
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    agent: state.agent,
  };
}

export default connect(mapStateToProps)(Layout);
