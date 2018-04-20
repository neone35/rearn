import React from 'react';
import { List } from 'material-ui/List';
import FoldersList from './lists/FoldersList';
import SetList from './lists/SetList';

const DataList = () => (
  <div>
    <List>
      <FoldersList />
      <SetList />
    </List>
  </div>
);

export default DataList;
