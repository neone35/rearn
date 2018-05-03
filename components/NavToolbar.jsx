import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import Link from 'next/link';
import scss from '../static/style.scss';

class NavToolbar extends React.Component {
  renderLeftSide() {
    const { leftContent, leftStyle, leftLink } = this.props;
    let leftside = null;
    if (leftContent != null) {
      leftside = (
        <ToolbarGroup>
          <ToolbarTitle
            text={leftContent}
            style={{ overflow: 'visible' }}
            className={[leftStyle, leftLink ? scss.pointerCursor : null].join(' ')}
          />
        </ToolbarGroup>
      );
    }
    return leftside;
  }

  renderRightSide() {
    const { rightContent, rightStyle, rightLink } = this.props;
    let rightside = null;
    if (rightContent != null) {
      rightside = (
        <ToolbarGroup lastChild>
          <ToolbarTitle
            text={rightContent}
            style={{ overflow: 'visible' }}
            className={[rightStyle, rightLink ? scss.pointerCursor : null].join(' ')}
          />
        </ToolbarGroup>
      );
    }
    return rightside;
  }

  renderCenter() {
    const { centerContent, centerStyle } = this.props;
    let center = null;
    if (centerContent != null) {
      center = (
        <ToolbarGroup lastChild>
          <ToolbarTitle
            text={centerContent}
            className={centerStyle}
          />
        </ToolbarGroup>
      );
    }
    return center;
  }

  render() {
    const { rightLink, leftLink } = this.props;
    return (
      <Toolbar>
        <Link href={leftLink || ''}>
          {this.renderLeftSide()}
        </Link>
        {this.renderCenter()}
        <Link href={rightLink || ''}>
          {this.renderRightSide()}
        </Link>
      </Toolbar>
    );
  }
}

export default NavToolbar;
