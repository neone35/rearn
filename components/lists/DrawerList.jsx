import { connect } from 'react-redux';
import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import AcountCircle from 'material-ui/svg-icons/action/account-circle';
import InfoIcon from 'material-ui/svg-icons/action/info';
import { purple800 } from 'material-ui/styles/colors';
import Link from 'next/link';

const DrawerList = () => (
  <List>
    <Link href="/auth/google">
      <ListItem
        leftAvatar={<Avatar icon={<AcountCircle />} backgroundColor={purple800} />}
        primaryText="Login"
      />
    </Link>
    <Link href="/about">
      <ListItem
        leftAvatar={<Avatar icon={<InfoIcon />} backgroundColor={purple800} />}
        primaryText="About"
      />
    </Link>
  </List>
);

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(DrawerList);
