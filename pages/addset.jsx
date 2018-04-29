import Error from 'next/error';
import withRedux from 'next-redux-wrapper';
import React from 'react';
import { initStore, fetchUser } from '../server/store';
import Layout from '../lib/layout';


class AddSet extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  renderAddSet() {
    const { user } = this.props;
    const statusCode = user ? false : 401;
    let addset = null;
    if (user) {
      addset = (
        <p>You can add set!</p>
      );
    } else {
      return <Error statusCode={statusCode} />;
    }
    return addset;
  }

  render() {
    return (
      <Layout title="Rearn - create new set">
        { this.renderAddSet() }
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

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(AddSet);
