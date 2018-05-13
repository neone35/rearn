import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';

class StatTabs extends React.Component {
  renderTabs() {
    const { labels, tabFunctions, inkBar } = this.props;
    const tabs = labels.map((label, index) =>
      (
        <Tab
          buttonStyle={{ backgroundColor: 'white', color: 'grey' }}
          label={label}
          key={label}
          onActive={tabFunctions[index]}
        />
      ));
    return (
      <Tabs
        inkBarStyle={inkBar ? { backgroundColor: 'purple' } : { display: 'none' }}
        initialSelectedIndex={1}
      >
        {tabs}
      </Tabs>
    );
  }

  render() {
    return (
      <Paper zDepth={1} rounded={false}>
        {this.renderTabs()}
      </Paper>
    );
  }
}

export default StatTabs;

