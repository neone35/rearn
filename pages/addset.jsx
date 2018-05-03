import Error from 'next/error';
import withRedux from 'next-redux-wrapper';
import React from 'react';
import DoneIcon from 'material-ui/svg-icons/navigation/check';
import CancelIcon from 'material-ui/svg-icons/navigation/cancel';
import IconButton from 'material-ui/IconButton';
import { initStore, fetchUser } from '../server/store';
import Layout from '../lib/layout';
import SetForm from '../components/SetForm';
import NavToolbar from '../components/NavToolbar';
import { linkStyle } from '../lib/sharedStyles';


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
        <div>
          <NavToolbar
            rightLink="/settings"
            leftContent={
              <IconButton tooltip="Cancel" iconStyle={linkStyle}>
                <CancelIcon />
              </IconButton>
            }
            rightContent={
              <IconButton tooltip="Save" iconStyle={linkStyle}>
                <DoneIcon />
              </IconButton>
            }
          />
          <SetForm />
        </div>
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
