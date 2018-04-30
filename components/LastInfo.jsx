import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import Link from 'next/link';


class LastInfo extends React.Component {
  renderLastTime() {
    const { lastStudied } = this.props;
    let lasttime = null;
    lasttime = (
      <ToolbarGroup>
        <ToolbarTitle
          text={[
            <span key="Last studied">Last studied</span>,
            <br key="br" />,
            <span key={lastStudied}>{lastStudied}</span>,
          ]}
          style={{ color: 'white', fontSize: '0.8em', lineHeight: '1rem' }}
        />
      </ToolbarGroup>
    );
    return lasttime;
  }

  renderLastSetName() {
    const { lastSet } = this.props;
    let lastsetname = null;
    lastsetname = (
      <ToolbarGroup lastChild>
        <ToolbarTitle
          text={lastSet}
          style={{ color: 'white', fontVariant: 'small-caps' }}
        />
      </ToolbarGroup>
    );
    return lastsetname;
  }

  render() {
    return (
      <Link href="/settings">
        <Toolbar style={{ cursor: 'pointer' }}>
          {this.renderLastTime()}
          {this.renderLastSetName()}
        </Toolbar>
      </Link>
    );
  }
}

export default LastInfo;
