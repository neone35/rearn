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

  // TODO: replace dataroute=/settings with {propPages[index]}
  renderTabs() {
    const { labels, pages } = this.props;
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
        inkBarStyle={{ backgroundColor: 'purple' }}
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


// TODO: replace /settings with {propPages[index]}
// function StatTabs(props) {
//   const { propLabels, propPages } = props;
//   let tabs = null;
//   if (propLabels != null) {
//     tabs = propLabels.map((propLabel, index) =>
//       (
//         <Tab
//           label={propLabel}
//           key={propLabel}
//           onActive={handleActive}
//           dataroute="/settings"
//         >
//           <div>
//             <p>{propPages[index]}</p>
//           </div>
//         </Tab>
//       ));
//   } else {
//     tabs = localLabels.map((localLabel, index) =>
//       (
//         <Tab
//           label={localLabel}
//           key={localLabel}
//           onActive={handleActive}
//           dataroute="/settings"
//         >
//           <div>
//             <p>{localPages[index]}</p>
//           </div>
//         </Tab>
//       ));
//   }
//   return (
//     <Tabs>{tabs}</Tabs>
//   );
// }

// export default StatTabs;

