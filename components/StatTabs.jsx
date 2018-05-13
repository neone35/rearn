import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';

class StatTabs extends React.Component {
  // TODO: replace dataroute=/settings with {pages[index]}
  renderTabs() {
    const { labels, tabFunctions, inkBar } = this.props;
    const useLabels = (labels == null) ? '' : labels;
    console.log(this.props.labels[1]);
    console.log(this.state);
    const tabs = useLabels.map((useLabel, index) => // eslint-disable-line
      (
        <Tab
          buttonStyle={{ backgroundColor: 'white', color: 'grey' }}
          label={useLabel}
          key={useLabel}
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

