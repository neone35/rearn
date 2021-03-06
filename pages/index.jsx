import withRedux from 'next-redux-wrapper';
import moment from 'moment';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { Card, CardHeader } from 'material-ui/Card';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { green800 } from 'material-ui/styles/colors';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ViewCarousel from 'material-ui/svg-icons/action/view-carousel';
import React from 'react';
import Layout from '../lib/layout';
import StatTabs from '../components/StatTabs';
import NavToolbar from '../components/NavToolbar';
import MainList from '../components/MainList';
import DrawerList from '../components/lists/DrawerList';
import CreateTabs from '../components/CreateTabs';
import { initStore, fetchUser, fetchSets } from '../server/store';
import scss from '../static/style.scss';

function getOneSet(sets, id) {
  let thisSet = null;
  for (let i = 0; i < sets.length; i += 1) {
    if (id === sets[i]._id) { // eslint-disable-line
      thisSet = sets[i];
    }
  }
  return thisSet;
}

class Index extends React.Component {
  // static getInitialProps({ store, isServer }) {
  //   store.dispatch(fetchUser());
  //   store.dispatch(fetchSets());
  //   store.dispatch(getUserAgent());
  //   return { isServer };
  // }

  constructor(props) {
    super(props);
    this.state = {
      floatClicked: false,
      showSetList: false,
      showFolderList: false,
    };
    this.handleFloatClick = this.handleFloatClick.bind(this);
    this.handleShowSets = this.handleShowSets.bind(this);
    this.handleShowMain = this.handleShowMain.bind(this);
    this.handleShowFolders = this.handleShowFolders.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchSets();
  }

  handleFloatClick() {
    this.setState({
      floatClicked: !this.state.floatClicked,
    });
  }
  handleShowSets() {
    this.setState({ showFolderList: false, showSetList: true });
  }
  handleShowMain() {
    this.setState({ showFolderList: false, showSetList: false });
  }
  handleShowFolders() {
    this.setState({ showSetList: false, showFolderList: true });
  }

  renderCreateTabs() {
    const createTabs = (
      <div>
        { this.state.floatClicked ?
          <div>
            <FloatingActionButton
              backgroundColor={green800}
              className={scss.floatBtnOpen}
              onClick={this.handleFloatClick}
            >
              <CloseIcon />
            </FloatingActionButton>
            <CreateTabs
              labels={['Folder', 'Set']}
              icons={[<FileFolder color="white" />, <ViewCarousel color="white" />]}
              routes={['', '/addset']}
              onSelect={false}
              classNames={false}
            />
          </div>
          :
          <FloatingActionButton
            backgroundColor={green800}
            className={scss.floatBtn}
            onClick={this.handleFloatClick}
          >
            <ContentAdd />
          </FloatingActionButton> }
      </div>
    );
    return createTabs;
  }

  renderLayoutChildren() {
    let layoutChildren = null;
    const { user, sets } = this.props;
    let allCardsNum = 0;
    for (let i = 0; i < sets.length; i += 1) {
      allCardsNum += sets[i].cards.length;
    }
    if (user) {
      const { lastStudied, lastSetID } = user;
      const lastSetTime = moment(lastStudied).format('MMMMDD HH:mm').toUpperCase();
      const lastSet = getOneSet(sets, lastSetID);
      layoutChildren = (
        <div style={{ position: 'relative' }}>
          <StatTabs
            labels={[
              [sets.length || 0, 'sets'].join(' '),
              [allCardsNum || 0, 'cards'].join(' '),
              [null || 0, 'folders'].join(' '),
              ]}
            tabFunctions={[
              this.handleShowSets,
              this.handleShowMain,
              this.handleShowFolders,
            ]}
            inkBar
          />
          <NavToolbar
            rightRoute="set"
            // eslint-disable-next-line
            rightParams={{ id: lastSet ? lastSet._id : 'none' }}
            leftStyle={scss.doubleLineToolbarTitle}
            rightStyle={scss.smallCapsToolbarTitle}
            leftContent={[
              <span key="lastStudied">Last studied</span>,
              <br key="br" />,
              <span key="monthTime">{lastSetTime || 'never'}</span>,
            ]}
            rightContent={lastSet ? lastSet.title : 'none'}
          />
          <MainList
            showSets={this.state.showSetList}
            showFolders={this.state.showFolderList}
          />
          { this.renderCreateTabs() }
        </div>
      );
    } else {
      layoutChildren = (
        <Card>
          <CardHeader
            title="Login please"
          />
          <DrawerList />
        </Card>
      );
    }
    return layoutChildren;
  }

  render() {
    // console.log(this.props);
    return (
      <Layout title="Rearn - index" showSearchBtn>
        {this.renderLayoutChildren()}
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.authReducer,
    sets: state.setsReducer,
  };
}

export default withRedux(
  initStore,
  mapStateToProps,
  { fetchUser, fetchSets },
)(Index);
