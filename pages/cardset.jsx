import React from 'react';
import IconButton from 'material-ui/IconButton';
import ActionErase from 'material-ui/svg-icons/content/delete-sweep';
import ActionEdit from 'material-ui/svg-icons/image/edit';
import ActionPlay from 'material-ui/svg-icons/av/play-arrow';
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

// function getSetCards(set) {
//   let thisSet = null;
//   for (let i = 0; i < sets.length; i += 1) {
//     if (id === sets[i]._id) { // eslint-disable-line
//       thisSet = sets[i];
//     }
//   }
//   return thisSet;
// }

class cardset extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  // renderSetCards() {
  //   const { sets } = this.props;
  //   const { id } = this.props.url.query;
  //   const thisSet = getOneSet(sets, id);
  //   const setCards = getSetCards(thisSet);
  //   const thisTitle = thisSet.title;
  //   const cards = (
  //     <p>hoho</p>
  //   );
  //   return cards;
  // }

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
          <IconButton
            key="erase"
            tooltip="Clear stats"
            iconStyle={{ color: '#FFF' }}
          >
            <ActionErase />
          </IconButton>,
          <IconButton
            key="edit"
            tooltip="Edit"
            iconStyle={{ color: '#FFF' }}
          >
            <ActionEdit />
          </IconButton>,
        ]}
        rightContent={[
          <ToolbarTitle key="title" text={thisTitle} />,
          <IconButton
            key="study"
            tooltip="Study"
            iconStyle={{ color: '#FFF', transform: 'scale(1.5)' }}
          >
            <ActionPlay />
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
    const { user } = this.props;
    const statusCode = user ? false : 401;
    let setPage = null;
    // console.log(thisSet);
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
    const { sets } = this.props;
    const { id } = this.props.url.query;
    const thisSet = getOneSet(sets, id);
    return (
      <Layout title={['Rearn', thisSet.title].join(' - ')}>
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
