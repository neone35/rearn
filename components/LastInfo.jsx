import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import Link from 'next/link';
import scss from '../static/style.scss';

class LastInfo extends React.Component {
  renderLeftSide() {
    const { leftContent, leftStyle, leftLink } = this.props;
    let lasttime = null;
    lasttime = (
      <ToolbarGroup>
        <ToolbarTitle
          text={leftContent}
          className={[leftStyle, leftLink ? scss.pointerCursor : null].join(' ')}
        />
      </ToolbarGroup>
    );
    return lasttime;
  }

  renderRightSide() {
    const { rightContent, rightStyle, rightLink } = this.props;
    let lastsetname = null;
    lastsetname = (
      <ToolbarGroup lastChild>
        <ToolbarTitle
          text={rightContent}
          className={[rightStyle, rightLink ? scss.pointerCursor : null].join(' ')}
        />
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
