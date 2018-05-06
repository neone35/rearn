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
    this.state = { dialogOpen: false };
    this.handleDialogOpen = this.handleDialogOpen.bind(this);
    this.handleDialogClose = this.handleDialogClose.bind(this);
  }

  componentDidMount() { this.props.fetchUser(); }
  handleDialogOpen() { this.setState({ dialogOpen: true }); }
  handleDialogClose() { this.setState({ dialogOpen: false }); }

  renderAddSet() {
    const { user, setForm } = this.props;
    const statusCode = user ? false : 401;
    let addset = null;
    // console.log(this.props.form);
    if (user) {
      addset = (
        <div>
          <NavToolbar
            leftContent={
              <div>
                <IconButton
                  onClick={this.handleDialogOpen}
                  tooltip="Cancel"
                  iconStyle={{ color: '#FFF' }}
                >
                  <CancelIcon />
                </IconButton>
              </div>
            }
            rightContent={
              <IconButton
                onClick={() => submitSet(setForm.values)}
                tooltip="Save"
                iconStyle={{ color: '#FFF' }}
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
  submitSet: () => dispatch(submitSet()),
});

function mapStateToProps(state) {
  return {
    user: state.authReducer,
    setForm: state.formReducer.addset,
  };
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(AddSet);
