import React from 'react';
import Router from 'next/router';
import { Tabs, Tab } from 'material-ui/Tabs';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ViewCarousel from 'material-ui/svg-icons/action/view-carousel';
import { green800 } from 'material-ui/styles/colors';

function handleActive(tab) {
  const { dataroute } = tab.props;
  Router.push(dataroute);
}

class CreateTabs extends React.Component {
  handleChange() {
    this.setState({
      value: this.state.value,
    });
  }

  render() {
    return (
      <Tabs inkBarStyle={{ backgroundColor: green800 }}>
        <Tab
          buttonStyle={{ backgroundColor: green800, color: 'white' }}
          label="Folder"
          value="folder"
          icon={<FileFolder color="white" />}
          onActive={handleActive}
          dataroute="/about"
        />
        <Tab
          buttonStyle={{ backgroundColor: green800, color: 'white' }}
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
