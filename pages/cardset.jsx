import React from 'react';
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import { ToolbarTitle } from 'material-ui/Toolbar';
import Error from 'next/error';
import withRedux from 'next-redux-wrapper';
import { initStore, fetchUser } from '../server/store';
import Layout from '../lib/layout';
import StatTabs from '../components/StatTabs';
import NavToolbar from '../components/NavToolbar';
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

class cardset extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  renderSetToolbar() {
    const { sets } = this.props;
    const { id } = this.props.url.query;
    const thisSet = getOneSet(sets, id);
    const thisTitle = thisSet.title;
    const stats = (
      <NavToolbar
        rightLink="/settings"
        leftStyle={scss.doubleLineToolbarTitle}
        rightStyle={scss.smallCapsToolbarTitle}
        leftContent={[
          <IconButton tooltip="Close" iconStyle={{ color: '#FFF' }}>
            <ActionSettings />
          </IconButton>,
          <IconButton tooltip="Search" iconStyle={{ color: '#FFF' }}>
            <ActionSearch />
          </IconButton>,
        ]}
        rightContent={[
          <ToolbarTitle text={thisTitle} />,
          <IconButton tooltip="Search" iconStyle={{ color: '#FFF' }}>
            <ActionSearch />
          </IconButton>,
        ]}
      />
    );
    return stats;
  }

  renderSetStats() {
    const { sets } = this.props;
    const { id } = this.props.url.query;
    const thisSet = getOneSet(sets, id);
    const thisScore = [thisSet.score, '%'].join('');
    const thisTime = [thisSet.timespent ? thisSet.timespent : '0', 'ms'].join(' ');
    const stats = (
      <StatTabs
        labels={[
          [
            <span key={thisScore}>{thisScore}</span>,
            <span className={scss.lowerThinText} key="score">score</span>,
          ],
          [
            <span key={thisSet.cards.length}>{thisSet.cards.length}</span>,
            <span className={scss.lowerThinText} key="cards">cards</span>,
          ],
          [
            <span className={scss.lowerText} key={thisTime}>{thisTime}</span>,
            <span className={scss.lowerThinText} key="studied">studied</span>,
          ],
        ]}
        inkBar={false}
      />
    );
    return stats;
  }

  renderSetPage() {
    const { user, sets } = this.props;
    const { id } = this.props.url.query;
    const statusCode = user ? false : 401;
    const thisSet = getOneSet(sets, id);
    let setPage = null;
    const { title } = thisSet;
    console.log(thisSet);
    if (user) {
      setPage = (
        <div>
          {this.renderSetStats()}
          {this.renderSetToolbar()}
        </div>
      );
    } else {
      return <Error statusCode={statusCode} />;
    }
    return setPage;
  }

  render() {
    const { id } = this.props.url.query;
    return (
      <Layout title={['Rearn', id].join(' - ')}>
        {this.renderSetPage()}
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

export default withRedux(initStore, mapStateToProps, { fetchUser })(cardset);
