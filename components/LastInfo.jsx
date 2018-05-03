import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import Link from 'next/link';

class LastInfo extends React.Component {
  renderLeftSide() {
    const { leftContent, leftStyle } = this.props;
    let lasttime = null;
    lasttime = (
      <ToolbarGroup>
        <ToolbarTitle text={leftContent} className={leftStyle} />
      </ToolbarGroup>
    );
    return lasttime;
  }

  renderRightSide() {
    const { rightContent, rightStyle } = this.props;
    let lastsetname = null;
    lastsetname = (
      <ToolbarGroup lastChild>
        <ToolbarTitle text={rightContent} className={rightStyle} />
      </ToolbarGroup>
    );
    return lastsetname;
  }

  render() {
    const { rightLink, leftLink } = this.props;
    return (
      <Toolbar>
        <Link href={leftLink || ''}>
          {this.renderLeftSide()}
        </Link>
        <Link href={rightLink || ''}>
          {this.renderRightSide()}
        </Link>
      </Toolbar>
    );
  }
}

export default LastInfo;
