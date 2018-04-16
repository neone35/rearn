import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import AutoComplete from 'material-ui/AutoComplete';
import Fade from 'react-reveal/Zoom';
import Link from 'next/link';
import React from 'react';
import { linkStyle, titleStyle } from './SharedStyles';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: [], showSearch: false };
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  handleUpdateInput(value) {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  }

  handleSearchClick() {
    this.setState({
      showSearch: true,
    });
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
          iconElementRight={
            <div>
              { this.state.showSearch ?
                <div style={{ display: 'inline-block' }}>
                  <Fade duration={500} right>
                    <AutoComplete
                      inputStyle={{ color: '#FFF' }}
                      hintStyle={{ color: '#936dc5' }}
                      hintText="for what?"
                      dataSource={this.state.dataSource}
                      onUpdateInput={this.handleUpdateInput}
                    />
                  </Fade>
                </div>
                : null }
              <IconButton tooltip="Search" iconStyle={linkStyle}>
                <ActionSearch onClick={this.handleSearchClick} />
              </IconButton>
              <Link href="/settings">
                <IconButton tooltip="Settings" iconStyle={linkStyle}>
                  <ActionSettings />
                </IconButton>
              </Link>
            </div>
          }
        />
      </div>
    );
  }
}

export default Header;
