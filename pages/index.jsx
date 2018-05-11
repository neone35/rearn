import withRedux from 'next-redux-wrapper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { Card, CardHeader } from 'material-ui/Card';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { green800 } from 'material-ui/styles/colors';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import React from 'react';
import Layout from '../lib/layout';
import StatTabs from '../components/StatTabs';
import NavToolbar from '../components/NavToolbar';
import MainList from '../components/MainList';
import DrawerList from '../components/lists/DrawerList';
import CreateTabs from '../components/CreateTabs';
import { initStore, fetchUser, getUserAgent } from '../server/store';
import scss from '../static/style.scss';


class Index extends React.Component {
  // static getInitialProps({ store, isServer }) {
  //   store.dispatch(fetchUser());
  //   store.dispatch(getUserAgent());
  //   return { isServer };
  // }
  constructor(props) {
    super(props);
    this.state = {
      floatClicked: false,
      // showMainList: true,
      // showSetList: false,
      // showFolderList: false,
    };
    this.handleFloatClick = this.handleFloatClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser();
    this.props.getUserAgent();
  }

  handleFloatClick() {
    this.setState({
      floatClicked: !this.state.floatClicked,
    });
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
            <CreateTabs />
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
    const { user } = this.props;
    if (user) {
      layoutChildren = (
        <div style={{ position: 'relative' }}>
          <StatTabs
            labels={['10 sets', '612 cards', '8 folders']}
            pages={['/sets', '/cards', '/folders']}
            inkBar
          />
          <NavToolbar
            rightLink="/settings"
            leftStyle={scss.doubleLineToolbarTitle}
            rightStyle={scss.smallCapsToolbarTitle}
            leftContent={[
              <span key="Last studied">Last studied</span>,
              <br key="br" />,
              <span key="MAR10 14:38">MAR10 14:38</span>,
            ]}
            rightContent="Flashcard folder 1"
          />
          <MainList />
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
    return (
      <Layout title="Rearn - index">
        {this.renderLayoutChildren()}
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.authReducer,
    agent: state.agentReducer,
  };
}

export default withRedux(initStore, mapStateToProps, { fetchUser, getUserAgent })(Index);
