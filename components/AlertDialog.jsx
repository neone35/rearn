import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Link from 'next/link';

class AlertDialog extends React.Component {
  componentDidMount() {

  }

  renderYesButton() {
    let yesButton = null;
    const {
      linkYes, labelYes, highlightYes, functionYes,
    } = this.props;
    if (linkYes) {
      yesButton = (
        <Link href={linkYes || ''}>
          <FlatButton
            label={labelYes}
            primary
            keyboardFocused={false || highlightYes}
          />
        </Link>
      );
    } else if (functionYes) {
      yesButton = (
        <FlatButton
          label={labelYes}
          primary
          onClick={functionYes}
          keyboardFocused={false || highlightYes}
        />
      );
    }
    return yesButton;
  }

  renderNoButton() {
    let noButton = null;
    const {
      labelNo, highlightNo, functionNo,
    } = this.props;
    noButton = (
      <FlatButton
        label={labelNo}
        primary
        onClick={functionNo}
        keyboardFocused={false || highlightNo}
      />
    );
    return noButton;
  }

  render() {
    const {
      dialogTitle, dialogSubtitle, dialogOpen, functionNo,
    } = this.props;
    // console.log(submitSet);
    const actions = [
      this.renderNoButton(),
      this.renderYesButton(),
    ];
    return (
      <Dialog
        title={dialogTitle}
        actions={actions}
        modal={false}
        open={dialogOpen}
        onRequestClose={functionNo}
      >
        {dialogSubtitle}
      </Dialog>
    );
  }
}


export default AlertDialog;
