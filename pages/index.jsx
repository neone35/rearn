import RaisedButton from 'material-ui/RaisedButton';
import Link from 'next/link';
import React from 'react';
import Layout from '../lib/layout';
import StatTabs from '../components/StatTabs';
import LastInfo from '../components/LastInfo';

const CardsetLink = props => (
  <li>
    <Link href={`/cardset?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Index = () => (
  <Layout title="Rearn - index">
    <StatTabs />
    <LastInfo lastStudied="Mar10 14:38" lastSet="Flashcard folder 1" />
    <p>Hello Rearn!</p>
    <CardsetLink title="Physics1" />
    <RaisedButton label="Button test" />
  </Layout>
);

export default Index;
