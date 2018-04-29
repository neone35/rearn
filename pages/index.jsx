import withRedux from 'next-redux-wrapper';
import { bindActionCreators } from 'redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { Card, CardHeader } from 'material-ui/Card';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { green800 } from 'material-ui/styles/colors';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import Jump from 'react-reveal/Jump';
import Fade from 'react-reveal/Fade';
import React from 'react';
import Layout from '../lib/layout';
import StatTabs from '../components/StatTabs';
import LastInfo from '../components/LastInfo';
import DemoList from '../components/DemoList';
import DrawerList from '../components/lists/DrawerList';
import CreateTabs from '../components/CreateTabs';
import { initStore, fetchUser, getUserAgent } from '../server/store';
import { floatingBtnStyle } from '../lib/sharedStyles';

// const CardsetLink = props => (
//   <li>
//     <Link href={`/cardset?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// );

class Index extends React.Component {
  // static getInitialProps({ store, isServer }) {
  //   store.dispatch(fetchUser());
  //   store.dispatch(getUserAgent());
  //   return { isServer };
  // }
  constructor(props) {
    super(props);
    this.state = { floatClicked: false };
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
            <Jump duration={500}>
              <FloatingActionButton
                backgroundColor={green800}
                style={floatingBtnStyle}
                onClick={this.handleFloatClick}
              >
                <CloseIcon />
              </FloatingActionButton>
            </Jump>
            <Fade duration={500} bottom>
              <CreateTabs />
            </Fade>
          </div>
          :
          <FloatingActionButton
            backgroundColor={green800}
            style={floatingBtnStyle}
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
    if (this.props.user) {
      layoutChildren = (
        <div style={{ position: 'relative' }}>
          <StatTabs
            labels={['10 sets', '612 cards', '8 folders']}
            pages={['/sets', '/cards', '/folders']}
          />
          <LastInfo lastStudied="MAR10 14:38" lastSet="Flashcard folder 1" />
          <DemoList />
          { /*
          <CardsetLink title="Physics1" />
          <RaisedButton label="Button test" />
          */
          }
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

const mapDispatchToProps = dispatch => ({
  fetchUser: bindActionCreators(fetchUser, dispatch),
  getUserAgent: bindActionCreators(getUserAgent, dispatch),
});

function mapStateToProps(state) {
  return {
    user: state.user,
    agent: state.agent,
  };
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Index);
