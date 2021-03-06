import React from 'react';
import IconButton from 'material-ui/IconButton';
import ActionErase from 'material-ui/svg-icons/content/delete-sweep';
import ActionEdit from 'material-ui/svg-icons/image/edit';
import ActionPlay from 'material-ui/svg-icons/av/play-arrow';
import ActionBack from 'material-ui/svg-icons/navigation/arrow-back';
import ActionHint from 'material-ui/svg-icons/image/wb-incandescent';
import CircularProgress from 'material-ui/CircularProgress';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { ToolbarTitle } from 'material-ui/Toolbar';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Error from 'next/error';
import withRedux from 'next-redux-wrapper';
import { initStore, fetchUser, fetchSets, setLastSet, updateSetStats } from '../server/store';
import { Router } from '../server/routes';
import Layout from '../lib/layout';
import StatTabs from '../components/StatTabs';
import CreateTabs from '../components/CreateTabs';
import NavToolbar from '../components/NavToolbar';
import AlertDialog from '../components/AlertDialog';
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

function getOneCardSide(label, index, num, text, buttons) {
  return (
    <div>
      <Card>
        <CardHeader
          title={['#', index, '/', num].join(' ')}
          subtitle={label}
        />
        <CardText className={scss.cardText}>{text}</CardText>
      </Card>
      {buttons}
    </div>
  );
}

function removeLastDir(currentUrl) {
  const slashSplitUrl = currentUrl.split('/');
  slashSplitUrl.pop(); // remove last element (learn)
  return (slashSplitUrl.join('/'));
}

class cardset extends React.Component {
  // static async getInitialProps({ query }) {
  //   console.log(query);
  // }

  constructor(props) {
    super(props);
    this.state = {
      studying: false,
      sure: 0,
      unsure: 0,
      unknown: 0,
      studyTime: 0,
      currentCard: 0,
      showHint: false,
      showAnswer: false,
      cancelDialogOpen: false,
    };
    this.turnOnStudyState = this.turnOnStudyState.bind(this);
    this.openCancelDialog = this.openCancelDialog.bind(this);
    this.closeCancelDialog = this.closeCancelDialog.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchSets();
    const { asPath } = this.props.url;
    const isLearnUrl = asPath.indexOf('learn') > -1;
    if (isLearnUrl) this.turnOnStudyState();
  }

  openCancelDialog() { this.setState({ cancelDialogOpen: true }); }
  closeCancelDialog() { this.setState({ cancelDialogOpen: false }); }

  turnOnStudyState() {
    this.setState({ studying: true });
    this.setState({ studyTime: (new Date()).getTime() });
  }

  turnOffStudyState(thisSet, percent, sSpent) {
    this.setState({ studying: false });
    // update last studied set in front page
    this.props.setLastSet(
      thisSet._id, // eslint-disable-line
      new Date().getTime(),
    );
    // update studied set stats in cardset page
    this.props.updateSetStats(
      thisSet._id, // eslint-disable-line
      percent,
      sSpent,
    );
    const setPath = removeLastDir(this.props.url.asPath); // remove /learn
    Router.replace(setPath);
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
        tabFunctions={false}
      />
    );
    return stats;
  }

  renderDialogs(thisSet) {
    let alert = null;
    alert = (
      <AlertDialog
        labelNo="Cancel"
        labelYes="Go back"
        dialogTitle="Delete current session stats?"
        dialogSubtitle="Changes won't be saved"
        dialogOpen={this.state.cancelDialogOpen}
        functionNo={this.closeCancelDialog}
        highlightNo
        functionYes={() => this.turnOffStudyState(thisSet)}
      />
    );
    return alert;
  }

  // eslint-disable-next-line
  renderStudyToolbar(thisSet) {
    const thisTitle = thisSet.title;
    const setStats = (
      <div>
        <NavToolbar
          leftStyle={scss.whiteColor}
          rightStyle={scss.whiteColor}
          centerStyle={scss.whiteColor}
          leftContent={
            <IconButton
              key="back"
              tooltip="Back"
              iconStyle={{ color: '#FFF' }}
              onClick={this.openCancelDialog}
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
              onClick={() => this.addUnsure()}
            >
              <ActionHint />
            </IconButton>
        }
        />
        {this.renderDialogs(thisSet)}
      </div>

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
    const cardCount = cards.length - 1; // second card = currentCard = 1
    const { currentCard, showHint, showAnswer } = this.state;
    let currentCardUI = null;
    // console.log(cardCount);
    // console.log(currentCard);
    if (currentCard <= cardCount) {
      const cardQuestion = cards[currentCard].question ?
        cards[currentCard].question : 'No question defined :(';
      const cardAnswer = cards[currentCard].answer ?
        cards[currentCard].answer : 'No answer defined :(';
      const cardHint = cards[currentCard].hint ?
        cards[currentCard].hint : 'No hint defined :(';
      const nextCardButton = (
        <CreateTabs
          classNames={false}
          labels={['Next']}
          icons={false}
          routes={false}
          onSelect={[() => this.switchCard()]}
        />
      );
      const mainStudyButtons = (
        <CreateTabs
          classNames={[scss.sureTab, scss.unsureTab, scss.unknownTab]}
          labels={['Sure', 'Unsure', 'Unknown']}
          icons={false}
          routes={false}
          onSelect={[
            () => this.addSure(),
            () => this.addUnsure(),
            () => this.addUnknown(),
          ]}
        />
      );
      if (showHint) {
        currentCardUI =
          getOneCardSide('Hint', currentCard + 1, cards.length, cardHint, nextCardButton);
      } else if (showAnswer) {
        currentCardUI =
          getOneCardSide('Answer', currentCard + 1, cards.length, cardAnswer, nextCardButton);
      } else {
        currentCardUI =
          getOneCardSide('Question', currentCard + 1, cards.length, cardQuestion, mainStudyButtons);
      }
    } else {
      const currentTime = new Date().getTime();
      const secondsSpent = (currentTime - this.state.studyTime) / 1000;
      const { sure, unsure, unknown } = this.state;
      const currentScore = (sure * 1) + (unsure * 0.5) + (unknown * 0);
      const currentPercent = (currentScore * 100) / cards.length;
      currentCardUI = (
        <div>
          <Table>
            <TableBody displayRowCheckbox={false}>
              <TableRow>
                <TableRowColumn>
                  Score
                </TableRowColumn>
                <TableRowColumn>Time</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  {[currentPercent, '% '].join('')}
                  <CircularProgress
                    mode="determinate"
                    value={currentPercent}
                    size={10}
                    thickness={2}
                  />
                </TableRowColumn>
                <TableRowColumn>{[secondsSpent, 's'].join('')}</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
          <RaisedButton
            primary
            fullWidth
            label="Back to list"
            onClick={() => this.turnOffStudyState(thisSet, currentPercent, secondsSpent)}
          />
        </div>
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
    const thisScore = [thisSet.score.toFixed(0) || '0', '%'].join('');
    const thisTime = [thisSet.timeSpent.toFixed(2) || '0', 's'].join(' ');
    // console.log(thisSet);
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
        tabFunctions={false}
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
    // console.log(this.props);
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

export default withRedux(
  initStore,
  mapStateToProps,
  {
    fetchUser, fetchSets, setLastSet, updateSetStats,
  },
)(cardset);
