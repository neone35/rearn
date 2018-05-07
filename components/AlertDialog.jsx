import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Link from 'next/link';
import { connect } from 'react-redux';
import { submitSet } from '../server/store';

class AlertDialog extends React.Component {
  componentDidMount() {

  }

  renderYesButton() {
    let yesButton = null;
    const {
      yesLink, labelYes, highlightYes, setForm,
    } = this.props;
    if (this.props.yesLink) {
      yesButton = (
        <Link href={yesLink || ''}>
          <FlatButton
            label={labelYes}
            primary
            keyboardFocused={false || highlightYes}
          />
        </Link>
      );
    } else {
      yesButton = (
        <FlatButton
          label={labelYes}
          primary
          onClick={() => this.props.submitSet(setForm.values)}
          keyboardFocused={false || highlightYes}
        />
      );
    }
    return yesButton;
  }

  render() {
    const {
      labelNo, dialogTitle, dialogSubtitle,
      highlightNo, dialogOpen, onClose,
    } = this.props;
    // console.log(submitSet);
    const actions = [
      <FlatButton
        label={labelNo}
        primary
        onClick={onClose}
        keyboardFocused={false || highlightNo}
      />,
      this.renderYesButton(),
    ];
    return (
      <Dialog
        title={dialogTitle}
        actions={actions}
        modal={false}
        open={dialogOpen}
        onRequestClose={onClose}
      >
        {dialogSubtitle}
      </Dialog>
    );
  }
}

function mapStateToProps(state) {
  return {
    setForm: state.form.addset,
  };
}

export default connect(mapStateToProps, { submitSet })(AlertDialog);
