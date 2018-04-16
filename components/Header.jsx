import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import AutoComplete from 'material-ui/AutoComplete';
import Link from 'next/link';
import React from 'react';
import { linkStyle, titleStyle } from './SharedStyles';

const rightButtons = (
  <div>
    <IconButton tooltip="Search" iconStyle={linkStyle}>
      <ActionSearch />
    </IconButton>
    <Link href="/settings">
      <IconButton tooltip="Settings" iconStyle={linkStyle}>
        <ActionSettings />
      </IconButton>
    </Link>
  </div>
);

class Header extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <AppBar
          title={
            <Link href="/">
              <span style={titleStyle}>REARN</span>
            </Link>
          }
          iconElementRight={rightButtons}
        />
      </div>
    );
  }
}

export default Header;
