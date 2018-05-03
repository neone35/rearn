import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Link from 'next/link';

class AlertDialog extends React.Component {
  render() {
    const {
      labelNo, labelYes, dialogTitle, dialogSubtitle,
      highlightNo, highlightYes, dialogOpen, onClose,
      yesLink,
    } = this.props;
    const actions = [
      <FlatButton
        label={labelNo}
        primary
        onClick={onClose}
        keyboardFocused={false || highlightNo}
      />,
      <Link href={yesLink || ''}>
        <FlatButton
          label={labelYes}
          primary
          onClick={this.handleOpen}
          keyboardFocused={false || highlightYes}
        />
      </Link>,
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

export default AlertDialog;
