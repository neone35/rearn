import React from 'react';
import Router from 'next/router';
import { Tabs, Tab } from 'material-ui/Tabs';

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
      value: '235 cards',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      value,
    });
  }

  renderTabs() {
    const { propLabels, propPages } = this.props;
    let tabs = null;
    if (propLabels != null) {
      tabs = propLabels.map((propLabel, index) =>
        (
          <Tab
            buttonStyle={{ backgroundColor: 'white', textColor: 'grey' }}
            label={propLabel}
            key={propLabel}
            onActive={handleActive}
            dataroute="/settings"
            value={propLabel}
          >
            <div>
              <p>{propPages[index]}</p>
            </div>
          </Tab>
        ));
    } else {
      tabs = localLabels.map((localLabel, index) =>
        (
          <Tab
            buttonStyle={{ backgroundColor: 'white', color: 'grey' }}
            label={localLabel}
            key={localLabel}
            onActive={handleActive}
            dataroute="/settings"
            value={localLabel}
          >
            <div>
              <p>{localPages[index]}</p>
            </div>
          </Tab>
        ));
    }
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        {tabs}
      </Tabs>
    );
  }

  render() {
    return (
      <div>
        {this.renderTabs()}
      </div>
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

