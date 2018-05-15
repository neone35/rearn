import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { Link } from '../server/routes';
import scss from '../static/style.scss';

class NavToolbar extends React.Component {
  renderLeftSide() {
    const { leftContent, leftStyle, leftRoute } = this.props;
    let leftside = null;
    const leftTemplate = (
      <ToolbarGroup>
        <ToolbarTitle
          text={leftContent}
          style={{ overflow: 'visible' }}
          className={[leftStyle, leftRoute ? scss.pointerCursor : null].join(' ')}
        />
      </ToolbarGroup>
    );
    if (leftRoute != null) {
      leftside = (
        <Link route={leftRoute}>
          {leftTemplate}
        </Link>
      );
    } else {
      leftside = leftTemplate;
    }
    return leftside;
  }

  renderRightSide() {
    const { rightContent, rightStyle, rightRoute } = this.props;
    let rightside = null;
    const rightTemplate = (
      <ToolbarGroup lastChild>
        <ToolbarTitle
          text={rightContent}
          style={{ overflow: 'visible' }}
          className={[rightStyle, rightRoute ? scss.pointerCursor : null].join(' ')}
        />
      </ToolbarGroup>
    );
    if (rightRoute != null) {
      rightside = (
        <Link route={rightRoute}>
          {rightTemplate}
        </Link>
      );
    } else {
      rightside = rightTemplate;
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
