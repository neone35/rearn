import React from 'react';
import Error from 'next/error';
import withRedux from 'next-redux-wrapper';
import { initStore, fetchUser } from '../server/store';
import Layout from '../lib/layout';
import StatTabs from '../components/StatTabs';
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

  renderSetPage() {
    const { user, sets } = this.props;
    const { id } = this.props.url.query;
    const statusCode = user ? false : 401;
    const thisSet = getOneSet(sets, id);
    let setPage = null;
    const { title } = thisSet;
    console.log(thisSet);
    const thisScore = [thisSet.score, '%'].join('');
    const thisTime = [thisSet.timespent ? thisSet.timespent : '0', 'ms'].join(' ');
    if (user) {
      setPage = (
        <div>
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
            pages={['/sets', '/cards', '/folders']}
            inkBar={false}
          />
          <h1>{title}</h1>
          <p style={{ color: 'red' }}>This is the blog post content.</p>
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
