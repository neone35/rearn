import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';
import rearnTheme from './rearnTheme';
import Clockolo from '../components/Clockolo';

class Layout extends React.Component {
  componentDidMount() {
  }

  render() {
    const { lastUpdate, light } = this.props;
    return (
      <MuiThemeProvider muiTheme={rearnTheme}>
        <div className="container">
          <Head>
            <title>{this.props.title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <Header />
          <Clockolo lastUpdate={lastUpdate} light={light} />
          {this.props.children}
          <footer>
            <span />
          </footer>
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    lastUpdate: state.lastUpdate,
    light: state.light,
  };
}

export default connect(mapStateToProps)(Layout);
