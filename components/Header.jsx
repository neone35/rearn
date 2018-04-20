import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import DrawerMenu from 'material-ui/svg-icons/navigation/menu';
import DrawerClose from 'material-ui/svg-icons/navigation/close';
import AutoComplete from 'material-ui/AutoComplete';
import Drawer from 'material-ui/Drawer';
import Fade from 'react-reveal/Zoom';
import Link from 'next/link';
import React from 'react';
import { linkStyle, titleStyle } from '../lib/sharedStyles';
import DrawerList from '../components/lists/DrawerList';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: [], showSearch: false, openDrawer: false };
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleDrawer = this.handleDrawer.bind(this);
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

  handleDrawer() {
    this.setState({
      openDrawer: !this.state.openDrawer,
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
          iconElementLeft={
            <div>
              <IconButton iconStyle={linkStyle} onClick={this.handleDrawer}>
                { this.state.openDrawer ?
                  <DrawerClose /> : <DrawerMenu />}
              </IconButton>
              <Drawer
                open={this.state.openDrawer}
                docked={false}
                onRequestChange={openDrawer => this.setState({ openDrawer })}
                width={185}
                containerStyle={{ top: '50px' }}
              >
                <DrawerList />
              </Drawer>
            </div>
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
