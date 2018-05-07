import React from 'react';
import Router from 'next/router';
import { Tabs, Tab } from 'material-ui/Tabs';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ViewCarousel from 'material-ui/svg-icons/action/view-carousel';
import scss from '../static/style.scss';

function handleActive(tab) {
  const { dataroute } = tab.props;
  Router.push(dataroute);
}

class CreateTabs extends React.Component {
  componentDidMount() { }

  render() {
    return (
      <Tabs
        inkBarStyle={{ display: 'none' }}
        className={scss.fixedTabs}
      >
        <Tab
          className={scss.tab}
          label="Folder"
          value="folder"
          icon={<FileFolder color="white" />}
          onActive={handleActive}
          dataroute="/about"
        />
        <Tab
          className={scss.tab}
          label="Set"
          value="set"
          icon={<ViewCarousel color="white" />}
          onActive={handleActive}
          dataroute="/addset"
        />
      </Tabs>
    );
  }
}

export default CreateTabs;
