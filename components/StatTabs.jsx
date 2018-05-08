import React from 'react';
import Router from 'next/router';
import { Tabs, Tab } from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';

const localLabels = ['8 sets', '235 cards', '2 folders'];
const localPages = ['/sets', '/cards', '/folders'];

function handleActive(tab) {
  const { dataroute } = tab.props;
  Router.push(dataroute);
}

class StatTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: (this.props.labels[1] != null) ? this.props.labels[1] : localLabels[1],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      value,
    });
  }

  // TODO: replace dataroute=/settings with {pages[index]}
  renderTabs() {
    const { labels, pages, inkBar } = this.props;
    const useLabels = (labels == null) ? localLabels : labels;
    const usePages = (pages == null) ? localPages : pages; // eslint-disable-line
    const tabs = useLabels.map((useLabel, index) => // eslint-disable-line
      (
        <Tab
          buttonStyle={{ backgroundColor: 'white', color: 'grey' }}
          label={useLabel}
          key={useLabel}
          onActive={handleActive}
          dataroute="/settings"
          value={useLabel}
        />
      ));
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
        inkBarStyle={inkBar ? { backgroundColor: 'purple' } : { display: 'none' }}
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

