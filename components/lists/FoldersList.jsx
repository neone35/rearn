import React from 'react';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import { purple800 } from 'material-ui/styles/colors';

const FoldersList = () => (
  <div>
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
  </div>
);

export default FoldersList;
