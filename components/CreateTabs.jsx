import React from 'react';
import Router from 'next/router';
import { Tabs, Tab } from 'material-ui/Tabs';
import scss from '../static/style.scss';

function handleActive(tab) {
  const { dataroute } = tab.props;
  Router.push(dataroute);
}

class CreateTabs extends React.Component {
  componentDidMount() { }

  render() {
    const {
      labels, icons, routes, onSelect, classNames,
    } = this.props;
    const tabs = labels.map((label, index) =>
      (
        <Tab
          className={classNames[index] || scss.createTab}
          label={label}
          value={label}
          key={label}
          onActive={onSelect[index] || handleActive}
          icon={icons[index]}
          dataroute={routes[index]}
        />
      ));
    return (
      <Tabs
        inkBarStyle={{ display: 'none' }}
        className={scss.fixedTabs}
      >
        {tabs}
      </Tabs>
    );
  }
}

export default CreateTabs;
