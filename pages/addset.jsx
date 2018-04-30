import Error from 'next/error';
import withRedux from 'next-redux-wrapper';
import React from 'react';
import { initStore, fetchUser } from '../server/store';
import Layout from '../lib/layout';
import SetForm from '../components/SetForm';


class AddSet extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  renderAddSet() {
    const { user } = this.props;
    // console.log(this.props);
    // console.log(this.props.form);
    const statusCode = user ? false : 401;
    let addset = null;
    if (user) {
      addset = (
        <SetForm onSubmit={values => console.log(values)} />
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
    form: state.form,
  };
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(AddSet);
