import Error from 'next/error';
import withRedux from 'next-redux-wrapper';
import React from 'react';
import Layout from '../lib/layout';
import { initStore, fetchUser } from '../server/store';

class Settings extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  renderSettings() {
    const { user } = this.props;
    const statusCode = user ? false : 401;
    let settingsPage = null;
    if (user) {
      settingsPage = (
        <p>Welcome to Settings, {user.displayName}!</p>
      );
    } else {
      return <Error statusCode={statusCode} />;
    }
    return settingsPage;
  }

  render() {
    return (
      <Layout title="Rearn - settings">
        { this.renderSettings() }
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser()),
});

function mapStateToProps(state) {
  return {
    user: state.authReducer,
  };
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Settings);

