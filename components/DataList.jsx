import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ViewCarousel from 'material-ui/svg-icons/action/view-carousel';
import { purple800 } from 'material-ui/styles/colors';

const DataList = () => (
  <div>
    <List>
      <ListItem
        leftAvatar={<Avatar icon={<FileFolder />} backgroundColor={purple800} />}
        rightIcon={<p style={{ color: 'blue' }}>60%</p>}
        primaryText="Physics folder"
        secondaryText="5 sets"
      />
      <ListItem
        leftAvatar={<Avatar icon={<FileFolder />} backgroundColor={purple800} />}
        rightIcon={<p style={{ color: 'green' }}>92%</p>}
        primaryText="Flashcard folder long name"
        secondaryText="2 sets"
      />
      <ListItem
        leftAvatar={<Avatar icon={<ViewCarousel />} />}
        rightIcon={<p style={{ color: 'green' }}>75%</p>}
        primaryText="Geography islands"
        secondaryText="88 cards"
      />
      <ListItem
        leftAvatar={<Avatar icon={<ViewCarousel />} />}
        rightIcon={<p style={{ color: 'red' }}>35%</p>}
        primaryText="History dates"
        secondaryText="25 cards"
      />
    </List>
  </div>
);

export default DataList;
