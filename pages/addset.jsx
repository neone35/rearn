import Error from 'next/error';
import withRedux from 'next-redux-wrapper';
import React from 'react';
import DoneIcon from 'material-ui/svg-icons/navigation/check';
import CancelIcon from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import { initStore, fetchUser, submitSet } from '../server/store';
import Layout from '../lib/layout';
import SetForm from '../components/SetForm';
import NavToolbar from '../components/NavToolbar';
import AlertDialog from '../components/AlertDialog';
import scss from '../static/style.scss';

class AddSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cancelDialogOpen: false, saveDialogOpen: false };
    this.openCancelDialog = this.openCancelDialog.bind(this);
    this.closeCancelDialog = this.closeCancelDialog.bind(this);
    this.openSaveDialog = this.openSaveDialog.bind(this);
    this.closeSaveDialog = this.closeSaveDialog.bind(this);
  }

  componentDidMount() { this.props.fetchUser(); }
  openCancelDialog() { this.setState({ cancelDialogOpen: true }); }
  closeCancelDialog() { this.setState({ cancelDialogOpen: false }); }
  openSaveDialog() { this.setState({ saveDialogOpen: true }); }
  closeSaveDialog() { this.setState({ saveDialogOpen: false }); }

  renderDialogs() {
    let alerts = null;
    const { setForm } = this.props;
    alerts = (
      <div>
        <AlertDialog
          labelNo="Cancel"
          labelYes="Discard"
          dialogTitle="Discard new set?"
          dialogSubtitle="Changes won't be saved"
          dialogOpen={this.state.cancelDialogOpen}
          functionNo={this.closeCancelDialog}
          highlightNo
          linkYes="/"
        />
        <AlertDialog
          labelNo="Cancel"
          labelYes="Save"
          dialogTitle="Save new set?"
          dialogSubtitle="Are you sure?"
          dialogOpen={this.state.saveDialogOpen}
          functionNo={this.closeSaveDialog}
          highlightNo
          functionYes={() => this.props.submitSet(setForm.values)}
        />
      </div>
    );
    return alerts;
  }

  renderNav() {
    let nav = null;
    nav = (
      <NavToolbar
        leftContent={
          <div>
            <IconButton
              onClick={this.openCancelDialog}
              tooltip="Cancel"
              iconStyle={{ color: '#FFF' }}
            >
              <CancelIcon />
            </IconButton>
          </div>
        }
        rightContent={
          <IconButton
            onClick={this.openSaveDialog}
            tooltip="Save"
            iconStyle={{ color: '#FFF' }}
          >
            <DoneIcon />
          </IconButton>
        }
        centerContent="New card set"
        centerStyle={scss.whiteColor}
      />
    );
    return nav;
  }

  renderAddSet() {
    const { user } = this.props;
    const statusCode = user ? false : 401;
    let addset = null;
    // console.log(submitSet);
    if (user) {
      addset = (
        <div>
          {this.renderNav()}
          {this.renderDialogs()}
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

function mapStateToProps(state) {
  return {
    user: state.authReducer,
    form: state.form,
    setForm: state.form.addset,
  };
}

export default withRedux(initStore, mapStateToProps, { fetchUser, submitSet })(AddSet);
