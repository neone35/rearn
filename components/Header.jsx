import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import DrawerMenu from 'material-ui/svg-icons/navigation/menu';
import DrawerClose from 'material-ui/svg-icons/navigation/close';
import AutoComplete from 'material-ui/AutoComplete';
import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';
import Fade from 'react-reveal/Zoom';
import Link from 'next/link';
import React from 'react';
import { linkStyle, titleStyle, avatarStyle } from '../lib/sharedStyles';
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
      showSearch: !this.state.showSearch,
    });
  }

  handleDrawer() {
    this.setState({
      openDrawer: !this.state.openDrawer,
    });
  }

  renderButtons() {
    let appBarButtons = null;
    if (this.props.user) {
      appBarButtons = (
        <span>
          { this.state.showSearch ?

            <IconButton tooltip="Close" iconStyle={linkStyle}>
              <DrawerClose onClick={this.handleSearchClick} />
            </IconButton>
          :
            <IconButton tooltip="Search" iconStyle={linkStyle}>
              <ActionSearch onClick={this.handleSearchClick} />
            </IconButton>
         }
          <Link href="/settings">
            <IconButton tooltip="Settings" iconStyle={linkStyle}>
              <ActionSettings />
            </IconButton>
          </Link>
        </span>
      );
    } else {
      return appBarButtons;
    }
    return appBarButtons;
  }

  renderDrawer() {
    const drawer = (
      <Drawer
        open={this.state.openDrawer}
        docked={false}
        onRequestChange={openDrawer => this.setState({ openDrawer })}
        width={185}
        containerStyle={{ top: '50px' }}
      >
        <DrawerList />
      </Drawer>
    );
    return drawer;
  }

  renderAvatarMenu() {
    const { user } = this.props;
    const avatarMenu = (
      <div>
        { this.state.openDrawer ?
          <IconButton iconStyle={linkStyle} onClick={this.handleDrawer}>
            <DrawerClose />
          </IconButton>
          :
          <Avatar src={user.avatarUrl} onClick={this.handleDrawer} style={avatarStyle} />}
      </div>
    );
    return avatarMenu;
  }

  renderLoginMenu() {
    const loginMenu = (
      <IconButton iconStyle={linkStyle} onClick={this.handleDrawer}>
        { this.state.openDrawer ?
          <DrawerClose /> : <DrawerMenu /> }
      </IconButton>
    );
    return loginMenu;
  }

  render() {
    const { user } = this.props;
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
              {user ?
                this.renderAvatarMenu()
              :
                this.renderLoginMenu()
              }
              {this.renderDrawer()}
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
              {this.renderButtons()}
            </div>
          }
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(Header);
