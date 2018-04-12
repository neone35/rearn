import React from 'react';
import Layout from '../lib/layout';

const Cardset = props => (
  <Layout>
    {console.log(props.url)}
    <h1>{props.url.query.title}</h1>
    <p>This is the blog post content.</p>
  </Layout>
);

export default Cardset;
