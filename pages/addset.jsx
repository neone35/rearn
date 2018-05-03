import Error from 'next/error';
import { submit } from 'redux-form';
import withRedux from 'next-redux-wrapper';
import React from 'react';
import DoneIcon from 'material-ui/svg-icons/navigation/check';
import CancelIcon from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import { initStore, fetchUser } from '../server/store';
import Layout from '../lib/layout';
import SetForm from '../components/SetForm';
import NavToolbar from '../components/NavToolbar';
import AlertDialog from '../components/AlertDialog';
import { linkStyle } from '../lib/sharedStyles';
import scss from '../static/style.scss';


class AddSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dialogOpen: false };
    this.handleDialogOpen = this.handleDialogOpen.bind(this);
    this.handleDialogClose = this.handleDialogClose.bind(this);
  }

  componentDidMount() { this.props.fetchUser(); }
  handleDialogOpen() { this.setState({ dialogOpen: true }); }
  handleDialogClose() { this.setState({ dialogOpen: false }); }

  renderAddSet() {
    const { user, submitSet } = this.props;
    const statusCode = user ? false : 401;
    let addset = null;
    if (user) {
      addset = (
        <div>
          <NavToolbar
            leftContent={
              <div>
                <IconButton
                  onClick={this.handleDialogOpen}
                  tooltip="Cancel"
                  iconStyle={linkStyle}
                >
                  <CancelIcon />
                </IconButton>
              </div>
            }
            rightContent={
              <IconButton
                onClick={submitSet}
                tooltip="Save"
                iconStyle={linkStyle}
              >
                <DoneIcon />
              </IconButton>
            }
            centerContent="New card set"
            centerStyle={scss.whiteColor}
          />
          {/* This is shown by handleDialogOpen */}
          <AlertDialog
            labelNo="Cancel"
            labelYes="Discard"
            dialogTitle="Discard new set?"
            dialogSubtitle="Changes won't be saved"
            dialogOpen={this.state.dialogOpen}
            onClose={this.handleDialogClose}
            highlightNo
            yesLink="/"
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
  submitSet: () => dispatch(submit('addset')),
});

function mapStateToProps(state) {
  return {
    user: state.user,
    form: state.form,
  };
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(AddSet);
