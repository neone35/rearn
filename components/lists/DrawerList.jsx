import { connect } from 'react-redux';
import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import AcountCircle from 'material-ui/svg-icons/action/account-circle';
import InfoIcon from 'material-ui/svg-icons/action/info';
import { purple800 } from 'material-ui/styles/colors';
import { Link } from '../../server/routes';


class DrawerList extends React.Component {
  renderAuthList() {
    let authButton = null;
    const { user } = this.props;
    if (user) {
      authButton = (
        <div>
          <ListItem
            leftAvatar={<Avatar src={user.avatarUrl} />}
            primaryText={user.displayName}
          />
          <Link route="logout">
            <ListItem
              leftAvatar={<Avatar icon={<AcountCircle />} backgroundColor={purple800} />}
              primaryText="Logout"
            />
          </Link>
        </div>
      );
    } else {
      authButton = (
        <Link route="login-google">
          <ListItem
            leftAvatar={<Avatar icon={<AcountCircle />} backgroundColor={purple800} />}
            primaryText="Login"
          />
        </Link>
      );
    }
    return authButton;
  }

  render() {
    return (
      <List>
        {this.renderAuthList()}
        <Link route="about">
          <ListItem
            leftAvatar={<Avatar icon={<InfoIcon />} backgroundColor={purple800} />}
            primaryText="About"
          />
        </Link>
      </List>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.authReducer,
  };
}

export default connect(mapStateToProps)(DrawerList);
