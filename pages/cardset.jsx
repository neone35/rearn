import React from 'react';
import IconButton from 'material-ui/IconButton';
import ActionErase from 'material-ui/svg-icons/content/delete-sweep';
import ActionEdit from 'material-ui/svg-icons/image/edit';
import ActionPlay from 'material-ui/svg-icons/av/play-arrow';
import { ToolbarTitle } from 'material-ui/Toolbar';
import { List, ListItem } from 'material-ui/List';
import Error from 'next/error';
import withRedux from 'next-redux-wrapper';
import { initStore, fetchUser, fetchSets } from '../server/store';
import { Router } from '../server/routes';
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
  static async getInitialProps({ query }) {
    console.log(query);
  }

  constructor(props) {
    super(props);
    this.state = {
      studying: false,
      sure: 0,
      unsure: 0,
      unknown: 0,
      // timeSpent: 0,
    };
    this.turnOnStudyState = this.turnOnStudyState.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchSets();
    const { asPath } = this.props.url;
    const isLearnUrl = asPath.indexOf('learn') > -1;
    if (isLearnUrl) this.turnOnStudyState();
  }

  turnOnStudyState() {
    this.setState({ studying: true });
  }

  redirectToStudyMode() {
    console.log(this.props.url);
    const { asPath } = this.props.url;
    const currentPath = asPath;
    const learnPath = `${currentPath}/learn`; // eslint-disable-line
    const pathMask = learnPath;
    Router.replace(learnPath, pathMask, { shallow: true });
  }

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
            onClick={() => this.redirectToStudyMode(thisSet)}
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
            <div>
              {this.renderSetStats(thisSet)}
              {this.renderSetToolbar(thisSet)}
            </div>
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
    console.log(this.props.url);
    const thisSet = getOneSet(sets, id);
    return (
      thisSet ?
        <Layout title={['Rearn', thisSet.title].join(' - ')}>
          <button onClick={() => this.redirectToStudyMode()}>learn</button>
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
