import React from 'react';
import Router from 'next/router';
import { Tabs, Tab } from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';

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
    const useLabels = (labels == null) ? '' : labels;
    const usePages = (pages == null) ? '' : pages; // eslint-disable-line
    const tabs = useLabels.map((useLabel, index) => // eslint-disable-line
      (
        <Tab
          buttonStyle={{ backgroundColor: 'white', color: 'grey' }}
          label={useLabel}
          key={useLabel}
          onActive={handleActive}
          dataroute={usePages[index]}
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

