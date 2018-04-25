import withRedux from 'next-redux-wrapper';
import React from 'react';
import Layout from '../lib/layout';
import { initStore, fetchUser } from '../server/store';

class Settings extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { user } = this.props;
    return (
      <Layout title="Rearn - settings">
        <p>Welcome to Settings, {user.displayName}!</p>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser()),
});

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Settings);

