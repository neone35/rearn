import React from 'react';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ViewCarousel from 'material-ui/svg-icons/action/view-carousel';

const SetList = () => (
  <div>
    <ListItem
      leftAvatar={<Avatar icon={<ViewCarousel />} backgroundColor="#33869F" />}
      rightIcon={<p style={{ color: 'green' }}>75%</p>}
      primaryText="Geography islands"
      secondaryText="88 cards"
    />
    <ListItem
      leftAvatar={<Avatar icon={<ViewCarousel />} backgroundColor="#33869F" />}
      rightIcon={<p style={{ color: 'red' }}>35%</p>}
      primaryText="History dates"
      secondaryText="25 cards"
    />
  </div>
);

export default SetList;
