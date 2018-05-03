import Error from 'next/error';
import withRedux from 'next-redux-wrapper';
import React from 'react';
import DoneIcon from 'material-ui/svg-icons/navigation/check';
import CancelIcon from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import { initStore, fetchUser } from '../server/store';
import Layout from '../lib/layout';
import SetForm from '../components/SetForm';
import NavToolbar from '../components/NavToolbar';
import { linkStyle } from '../lib/sharedStyles';
import scss from '../static/style.scss';


class AddSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cancelDialogOpen: false };
    this.handleCancelOpen = this.handleCancelOpen.bind(this);
    this.handleCancelClose = this.handleCancelClose.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  handleCancelOpen() {
    this.setState({ cancelDialogOpen: true });
  }

  handleCancelClose() {
    this.setState({ cancelDialogOpen: false });
  }

  renderAddSet() {
    const { user } = this.props;
    // console.log(this.props.form);
    const statusCode = user ? false : 401;
    let addset = null;
    const cancelActions = [
      <FlatButton
        label="Cancel"
        primary
        onClick={this.handleCancelClose}
      />,
      <FlatButton
        label="Discard"
        primary
        onClick={this.handleCancelOpen}
      />,
    ];
    if (user) {
      addset = (
        <div>
          <NavToolbar
            rightLink="/settings"
            leftContent={
              <div>
                <IconButton
                  onClick={this.handleCancelOpen}
                  tooltip="Cancel"
                  iconStyle={linkStyle}
                >
                  <CancelIcon />
                </IconButton>
              </div>
            }
            rightContent={
              <IconButton tooltip="Save" iconStyle={linkStyle}>
                <DoneIcon />
              </IconButton>
            }
            centerContent="New card set"
            centerStyle={scss.whiteColor}
          />
          <Dialog
            actions={cancelActions}
            modal={false}
            open={this.state.cancelDialogOpen}
            onRequestClose={this.handleCancelClose}
          >
            Discard new set?
          </Dialog>
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
