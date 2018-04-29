import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import Link from 'next/link';

const LastInfo = props => (
  <Link href="/settings">
    <Toolbar style={{ cursor: 'pointer' }}>
      <ToolbarGroup>
        <ToolbarTitle
          text={['Last studied', <br />, props.lastStudied]}
          style={{ color: 'white', fontSize: '0.8em', lineHeight: '1rem' }}
        />
      </ToolbarGroup>
      <ToolbarGroup lastChild>
        <ToolbarTitle
          text={props.lastSet}
          style={{ color: 'white', fontVariant: 'small-caps' }}
        />
      </ToolbarGroup>
    </Toolbar>
  </Link>
);

export default LastInfo;
