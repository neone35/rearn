import withRedux from 'next-redux-wrapper';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { Card, CardHeader } from 'material-ui/Card';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { green800 } from 'material-ui/styles/colors';
import Link from 'next/link';
import React from 'react';
import Layout from '../lib/layout';
import StatTabs from '../components/StatTabs';
import LastInfo from '../components/LastInfo';
import DemoList from '../components/DemoList';
import DrawerList from '../components/lists/DrawerList';
import { initStore, fetchUser } from '../server/store';
import { floatingBtnStyle } from '../lib/sharedStyles';


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

  componentDidMount() {
    this.props.fetchUser();
  }

  renderLayoutChildren() {
    let layoutChildren = null;
    if (this.props.user) {
      layoutChildren = (
        <div>
          <StatTabs
            labels={['10 sets', '612 cards', '8 folders']}
            pages={['/sets', '/cards', '/folders']}
          />
          <LastInfo lastStudied="MAR10 14:38" lastSet="Flashcard folder 1" />
          <DemoList />
          <CardsetLink title="Physics1" />
          <RaisedButton label="Button test" />
          <FloatingActionButton
            backgroundColor={green800}
            style={floatingBtnStyle}
          >
            <ContentAdd />
          </FloatingActionButton>
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

const mapDispatchToProps = dispatch => ({
  fetchUser: bindActionCreators(fetchUser, dispatch),
});

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Index);
