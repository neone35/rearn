import withRedux from 'next-redux-wrapper';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import React from 'react';
import Layout from '../lib/layout';
import { Link } from '../server/routes';
import { initStore } from '../server/store';


class About extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <Layout title="Rearn - about">
        <Card>
          <CardHeader
            title="Rearn - flashcard PWA (progressive web app)"
            subtitle="Bachelor thesis project by Artūr Maslov"
          />
          <CardActions>
            <FlatButton label={
              <Link route="github-ext">
            Github
              </Link>}
            />
            <FlatButton label={
              <Link route="facebook-ext">
            Facebook
              </Link>}
            />
          </CardActions>
          <CardText>
                Project uses:
                <ul>
                  <li><b>React</b> for front-end;</li>
                  <li><b>Next.js</b> for back-end and routing;</li>
                  <li><b>MongoDB (Mongoose)</b> as database;</li>
                  <li><b>Passport.js</b> for authentication;</li>
                  <li><b>Localforage</b> & <b>Workbox</b> for offline capabilities;</li>
                  <li><b>Material-UI</b> & <b>Bootstrap</b> for styling;</li>
                </ul>
          </CardText>
        </Card>
      </Layout>
    );
  }
}

export default withRedux(initStore, null, null)(About);
