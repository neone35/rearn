import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

const LastInfo = props => (
  <Toolbar>
    <ToolbarGroup>
      <ToolbarTitle text="Last studied" style={{ color: 'white', fontSize: '0.8em' }} />
      <ToolbarTitle text={props.lastStudied} style={{ color: 'white' }} />
    </ToolbarGroup>
    <ToolbarGroup lastChild>
      <ToolbarTitle text={props.lastSet} style={{ color: 'white' }} />
    </ToolbarGroup>
  </Toolbar>
);

export default LastInfo;
