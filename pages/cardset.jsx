import React from 'react';
import IconButton from 'material-ui/IconButton';
import ActionErase from 'material-ui/svg-icons/content/delete-sweep';
import ActionEdit from 'material-ui/svg-icons/image/edit';
import ActionPlay from 'material-ui/svg-icons/av/play-arrow';
import ActionBack from 'material-ui/svg-icons/navigation/arrow-back';
import ActionHint from 'material-ui/svg-icons/image/wb-incandescent';
import { Card, CardActions, CardText } from 'material-ui/Card';
import { ToolbarTitle } from 'material-ui/Toolbar';
import { List, ListItem } from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
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

// Router.onRouteChangeStart = (url) => {
//   console.log('App is changing to: ', url);
// };

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
      studyTime: 0,
      setScore: 0,
      currentCard: 0,
      showHint: false,
      showAnswer: false,
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
    this.setState({ studyTime: (new Date()).getTime() });
    this.setState({ setScore: 0 });
  }

  turnOffStudyState(cardsNum) {
    this.setState({ studying: false });
    const currentTime = new Date().getTime();
    this.setState({ studyTime: currentTime - this.state.studyTime });
    const { sure, unsure, unknown } = this.state;
    const currentScore = (sure * 1) + (unsure * 0.5) + (unknown * 0);
    const currentPercent = (currentScore * 100) / cardsNum;
    this.setState({ setScore: currentPercent });
    console.log(this.state.studyTime);
    console.log(this.state.setScore);
    Router.back();
  }

  redirectToStudyMode() {
    // console.log(this.props.url);
    const { asPath } = this.props.url;
    const currentPath = asPath;
    const learnPath = `${currentPath}/learn`; // eslint-disable-line
    const pathMask = learnPath;
    Router.replace(learnPath, pathMask, { shallow: true });
  }

  addSure() {
    this.setState({ sure: this.state.sure + 1 });
    this.switchCard();
  }
  addUnsure() {
    this.setState({
      unsure: this.state.unsure + 1,
      showHint: true,
    });
  }
  addUnknown() {
    this.setState({
      unknown: this.state.unknown + 1,
      showAnswer: true,
    });
  }
  switchCard() {
    this.setState({
      currentCard: this.state.currentCard + 1,
      showHint: false,
      showAnswer: false,
    });
  }


  renderStudyStats() {
    const { sure, unsure, unknown } = this.state;
    const stats = (
      <StatTabs
        labels={[
          [
            <span key="sure_count">{sure}</span>,
            <span className={scss.lowerThinText} key="sure_label">sure</span>,
          ],
          [
            <span key="unsure_count">{unsure}</span>,
            <span className={scss.lowerThinText} key="unsure_label">unsure</span>,
          ],
          [
            <span key="unknown_count">{unknown}</span>,
            <span className={scss.lowerThinText} key="unknown_label">unknown</span>,
          ],
        ]}
        inkBar={false}
      />
    );
    return stats;
  }

  // eslint-disable-next-line
  renderStudyToolbar(thisSet) {
    const thisTitle = thisSet.title;
    const setStats = (
      <NavToolbar
        leftStyle={scss.whiteColor}
        rightStyle={scss.whiteColor}
        centerStyle={scss.whiteColor}
        leftContent={
          <IconButton
            key="back"
            tooltip="Back"
            iconStyle={{ color: '#FFF' }}
            onClick={this.turnOffStudyState(thisSet.cards.length)}
          >
            <ActionBack />
          </IconButton>
        }
        centerContent={
          <ToolbarTitle key="title" text={thisTitle} />
        }
        rightContent={
          <IconButton
            key="hint"
            tooltip="Hint"
            iconStyle={{ color: '#FFF' }}
            onClick={this.addUnsure}
          >
            <ActionHint />
          </IconButton>
        }
      />
    );
    return setStats;
  }

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
  renderStudyCards(thisSet) {
    const { cards } = thisSet;
    const cardCount = cards.length;
    const { currentCard, showHint, showAnswer } = this.state;
    let currentCardUI = null;
    if (currentCard <= cardCount) {
      const cardQuestion = cards[this.state.currentCard].question;
      const cardAnswer = cards[this.state.currentCard].answer;
      const cardHint = cards[this.state.currentCard].hint;
      currentCardUI = (
        <Card>
          <CardText>
            {showHint ? cardHint : cardQuestion}
            {showAnswer ? cardAnswer : cardQuestion}
          </CardText>
          <CardActions>
            <FlatButton label="Sure" onClick={this.addSure} />
            <FlatButton label="Unsure" onClick={this.addUnsure} />
            <FlatButton label="Unknown" onClick={this.addUnknown} />
          </CardActions>
        </Card>
      );
    }
    return currentCardUI;
  }

  // eslint-disable-next-line
  renderSetToolbar(thisSet) {
    const thisTitle = thisSet.title;
    const setStats = (
      <NavToolbar
        leftStyle={scss.doubleLineToolbarTitle}
        rightStyle={scss.smallCapsToolbarTitle}
        centerStyle={scss.whiteColor}
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
        centerContent={
          <ToolbarTitle key="title" text={thisTitle} />
        }
        rightContent={
          <IconButton
            key="study"
            tooltip="Study"
            iconStyle={{ color: '#FFF', transform: 'scale(1.5)' }}
            onClick={() => this.redirectToStudyMode()}
          >
            <ActionPlay />
          </IconButton>
        }
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
              { this.renderStudyStats() }
              { this.renderStudyToolbar(thisSet) }
              { this.renderStudyCards(thisSet) }
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
    // console.log(this.props.url);
    const thisSet = getOneSet(sets, id);
    return (
      thisSet ?
        <Layout title={['Rearn', thisSet.title].join(' - ')}>
          {this.renderSetPage(thisSet)}
        </Layout>
        :
        <Layout title={['Rearn', 'loading...'].join(' - ')}>
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
