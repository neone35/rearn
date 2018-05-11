import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import IconButton from 'material-ui/IconButton';
import ActionErase from 'material-ui/svg-icons/content/delete-sweep';
import ActionEdit from 'material-ui/svg-icons/image/edit';
import ActionPlay from 'material-ui/svg-icons/av/play-arrow';
import { ToolbarTitle } from 'material-ui/Toolbar';
import { List, ListItem } from 'material-ui/List';
import Error from 'next/error';
import withRedux from 'next-redux-wrapper';
import { initStore, fetchUser, fetchSets } from '../server/store';
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

Router.onRouteChangeStart = (url) => {
  console.log('App is changing to: ', url);
};

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
  constructor(props) {
    super(props);
    this.state = {
      studying: false,
      sure: 0,
      unsure: 0,
      unknown: 0,
      // timeSpent: 0,
    };
    this.startStudyMode = this.startStudyMode.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchSets();
  }

  startStudyMode() { this.setState({ studying: !this.state.studying }); }
  addSure() { this.setState({ sure: this.state.sure + 1 }); }
  addUnsure() { this.setState({ unsure: this.state.unsure + 1 }); }
  addUnknown() { this.setState({ unknown: this.state.unknown + 1 }); }

  // eslint-disable-next-line
  renderSetCards(thisSet) {
    const { cards } = thisSet;
    const cardsList = cards.map((card, index) => (
      <ListItem
        key={['card', index].join('')}
        primaryText={card.question}
        secondaryText={card.answer}
      />));
    return cardsList;
  }

  // eslint-disable-next-line
  renderSetToolbar(thisSet) {
    const thisTitle = thisSet.title;
    const setStats = (
      <NavToolbar
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
            onClick={() => Router.push('/about')}
          >
            <ActionPlay />
          </IconButton>,
        ]}
      />
    );
    return setStats;
  }

  // eslint-disable-next-line
  renderSetStats(thisSet) {
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

  renderSetPage(thisSet) {
    const { user } = this.props;
    const statusCode = user ? false : 401;
    let setPage = null;
    // console.log(thisSet);
    if (user) {
      setPage = (
        <div>
          { this.state.studying ?
            // <StudyMode
            //   closeStudyMode={this.startStudyMode}
            //   sure={this.state.sureCount}
            //   unsure={this.state.unsureCount}
            //   unknown={this.state.unknownCount}
            //   addSure={this.addSure}
            //   addUnsure={this.addUnsure}
            //   addUnknown={this.addUnknown}
            //   timeSpent={this.state.timeSpent}
            //   saveStats={() => this.updateStats(setForm.values)}
            // />
            <p>Study mode soon!</p>
            :
            <div>
              { this.renderSetStats(thisSet) }
              { this.renderSetToolbar(thisSet) }
              <List>
                { this.renderSetCards(thisSet) }
              </List>
            </div>
          }
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
    console.log(this.props);
    const thisSet = getOneSet(sets, id);
    return (
      thisSet ?
        <Layout title={['Rearn', thisSet.title].join(' - ')}>
          {this.renderSetPage(thisSet)}
        </Layout>
        :
        <Layout title={['Rearn', 'no set'].join(' - ')}>
          <List>
            <ListItem
              primaryText="Receiving data..."
            />
          </List>
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

export default withRedux(initStore, mapStateToProps, { fetchUser, fetchSets })(cardset);
