import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ViewCarousel from 'material-ui/svg-icons/action/view-carousel';
import { purple800 } from 'material-ui/styles/colors';
import Link from 'next/link';
import { connect } from 'react-redux';
import { fetchSets } from '../server/store';
import scss from '../static/style.scss';


class MainList extends React.Component {
  componentDidMount() {
    this.props.fetchSets();
  }

  renderSets() {
    let setsList = null;
    const { sets } = this.props;
    if (sets) {
      setsList = sets.reverse().map((set, index) => (
        <Link
          as={`/set?title=${set.title.replace(/\s+/g, '')}`} // used by browser, no spaces
          // eslint-disable-next-line
          href={`/cardset?id=${set._id}`} // used by server
          key={['set', index].join('')}
        >
          <ListItem
            leftAvatar={<Avatar icon={<ViewCarousel />} backgroundColor={purple800} />}
            rightIcon={<p style={scss.score}>{[set.score, '%'].join('')}</p>}
            primaryText={set.title}
            secondaryText={
            [set.cards.length, set.cards.length > 1 ? 'cards' : 'card']
            .join(' ')
          }
          />
        </Link>));
    } else {
      setsList = (
        <ListItem
          leftAvatar={<Avatar icon={<ViewCarousel />} backgroundColor="#33869F" />}
          primaryText="No sets found"
          secondaryText="Create one!"
        />
      );
    }
    return setsList;
  }

  renderFolders() {
    let foldersList = null;
    const { folders } = this.props;
    if (folders) {
      foldersList = folders.reverse().map((folder, index) => (
        <ListItem
          key={['folder', index].join('')}
          leftAvatar={<Avatar icon={<FileFolder />} backgroundColor={purple800} />}
          rightIcon={<p style={scss.score}>{[folder.score, '%'].join('')}</p>}
          primaryText={folder.title}
          secondaryText={
            [folder.setIds.length, folder.setIds.length > 1 ? 'folders' : 'folder']
          }
        />));
    } else {
      foldersList = (
        <ListItem
          leftAvatar={<Avatar icon={<FileFolder />} backgroundColor="#33869F" />}
          primaryText="No folders found"
          secondaryText="Create one!"
        />
      );
    }
    return foldersList;
  }

  render() {
    return (
      <List>
        {this.renderFolders()}
        {this.renderSets()}
      </List>
    );
  }
}

function mapStateToProps(state) {
  return {
    sets: state.setsReducer,
  };
}

export default connect(mapStateToProps, { fetchSets })(MainList);
