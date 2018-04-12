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
    <p>Hello Rearn!</p>
    <CardsetLink title="Physics1" />
  </Layout>
);

export default Index;
