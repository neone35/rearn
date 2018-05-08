import React from 'react';
import Error from 'next/error';
import withRedux from 'next-redux-wrapper';
import { initStore, fetchUser } from '../server/store';
import Layout from '../lib/layout';


class cardset extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  renderSetPage() {
    const { user, sets } = this.props;
    const { id } = this.props.url.query;
    const statusCode = user ? false : 401;
    let thisSet = null;
    for (let i = 0; i < sets.length; i += 1) {
      if (id === sets[i]._id) { // eslint-disable-line
        thisSet = sets[i];
      }
    }
    let setPage = null;
    const { title } = thisSet;
    if (user) {
      setPage = (
        <div>
          <h1>{title}</h1>
          <p style={{ color: 'red' }}>This is the blog post content.</p>
        </div>
      );
    } else {
      return <Error statusCode={statusCode} />;
    }
    return setPage;
  }

  render() {
    const { id } = this.props.url.query;
    return (
      <Layout title={['Rearn', id].join(' - ')}>
        {this.renderSetPage()}
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.authReducer,
    sets: state.setsReducer,
  };
}

export default withRedux(initStore, mapStateToProps, { fetchUser })(cardset);
