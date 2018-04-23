import withRedux from 'next-redux-wrapper';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { green800 } from 'material-ui/styles/colors';
import Link from 'next/link';
import React from 'react';
import Layout from '../lib/layout';
import StatTabs from '../components/StatTabs';
import LastInfo from '../components/LastInfo';
import DataList from '../components/DataList';
import { initStore, fetchUser } from '../server/store';


const CardsetLink = props => (
  <li>
    <Link href={`/cardset?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

class Index extends React.Component {
  static getInitialProps({ store, isServer }) {
    store.dispatch(fetchUser());
    return { isServer };
  }

  render() {
    return (
      <Layout title="Rearn - index">
        <StatTabs
          labels={['10 sets', '612 cards', '8 folders']}
          pages={['/sets', '/cards', '/folders']}
        />
        <LastInfo lastStudied="MAR10 14:38" lastSet="Flashcard folder 1" />
        <DataList />
        <CardsetLink title="Physics1" />
        <RaisedButton label="Button test" />
        <FloatingActionButton
          backgroundColor={green800}
          style={{
            margin: 0,
            top: 'auto',
            right: 20,
            bottom: 20,
            left: 'auto',
            position: 'fixed',
          }}
        >
          <ContentAdd />
        </FloatingActionButton>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: bindActionCreators(fetchUser, dispatch),
});

export default withRedux(initStore, null, mapDispatchToProps)(Index);
