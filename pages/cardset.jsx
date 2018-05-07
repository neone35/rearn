import React from 'react';
import Error from 'next/error';
import withRedux from 'next-redux-wrapper';
import { initStore, fetchUser } from '../server/store';
import Layout from '../lib/layout';


class cardset extends React.Component {
  componentDidMount() { this.props.fetchUser(); }

  renderSetPage() {
    const { user } = this.props;
    const { title } = this.props.url.query;
    const statusCode = user ? false : 401;
    let setPage = null;
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
    const { title } = this.props.url.query;
    return (
      <Layout title={['Rearn', title].join(' - ')}>
        {this.renderSetPage()}
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.authReducer,
  };
}

export default withRedux(initStore, mapStateToProps, { fetchUser })(cardset);
