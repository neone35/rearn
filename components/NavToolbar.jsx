import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import Link from 'next/link';
import scss from '../static/style.scss';

class NavToolbar extends React.Component {
  renderLeftSide() {
    const { leftContent, leftStyle, leftLink } = this.props;
    let leftside = null;
    const leftTemplate = (
      <ToolbarGroup>
        <ToolbarTitle
          text={leftContent}
          style={{ overflow: 'visible' }}
          className={[leftStyle, leftLink ? scss.pointerCursor : null].join(' ')}
        />
      </ToolbarGroup>
    );
    if (leftContent != null) {
      leftside = leftTemplate;
    } else if (leftLink != null) {
      leftside = (
        <Link href={leftLink}>
          {leftTemplate}
        </Link>
      );
    }
    return leftside;
  }

  renderRightSide() {
    const { rightContent, rightStyle, rightLink } = this.props;
    let rightside = null;
    const rightTemplate = (
      <ToolbarGroup lastChild>
        <ToolbarTitle
          text={rightContent}
          style={{ overflow: 'visible' }}
          className={[rightStyle, rightLink ? scss.pointerCursor : null].join(' ')}
        />
      </ToolbarGroup>
    );
    if (rightContent != null) {
      rightside = rightTemplate;
    } else if (rightLink != null) {
      rightside = (
        <Link href={rightLink}>
          {rightTemplate}
        </Link>
      );
    }
    return rightside;
  }

  renderCenter() {
    const { centerContent, centerStyle } = this.props;
    let center = null;
    if (centerContent != null) {
      center = (
        <ToolbarGroup>
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
    return (
      <Toolbar>
        {this.renderLeftSide()}
        {this.renderCenter()}
        {this.renderRightSide()}
      </Toolbar>
    );
  }
}

export default NavToolbar;
