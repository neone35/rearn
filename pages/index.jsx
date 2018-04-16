import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import { Tabs, Tab } from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
import Link from 'next/link';
import React from 'react';
import Layout from '../lib/layout';

const CardsetLink = props => (
  <li>
    <Link href={`/cardset?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Index = () => (
  <Layout title="Rearn - index">
    <Tabs>
      <Tab label="8 sets" >
        <div>
          <h2>Tab One</h2>
        </div>
      </Tab>
      <Tab label="235 cards" >
        <div>
          <h2>Tab Two</h2>
        </div>
      </Tab>
      <Tab label="2 folders">
        <div>
          <h2>Tab Three</h2>
        </div>
      </Tab>
    </Tabs>
    <p>Hello Rearn!</p>
    <CardsetLink title="Physics1" />
    <RaisedButton label="Button test" />
  </Layout>
);

export default Index;
