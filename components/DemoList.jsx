import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ViewCarousel from 'material-ui/svg-icons/action/view-carousel';
import { purple800 } from 'material-ui/styles/colors';
import Link from 'next/link';


const DemoList = () => (
  <Link href="/">
    <List>
      {/* folder */}
      <ListItem
        leftAvatar={<Avatar icon={<FileFolder />} backgroundColor={purple800} />}
        rightIcon={<p style={{ color: 'blue', marginRight: '1.5em', fontSize: '1.5em' }}>60%</p>}
        primaryText="Physics folder"
        secondaryText="5 sets"
      />
      {/* set */}
      <ListItem
        leftAvatar={<Avatar icon={<ViewCarousel />} backgroundColor="#33869F" />}
        rightIcon={<p style={{ color: 'green', marginRight: '1.5em', fontSize: '1.5em' }}>75%</p>}
        primaryText="Geography islands"
        secondaryText="88 cards"
      />
    </List>
  </Link>
);

export default DemoList;
