import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/index.css';
import '../styles/main.css';
import Intro from '../components/Intro';
import About from '../components/About';

const Home: React.FC = () => {
  return (
    <Layout pageInfo={{ pageName: 'index' }}>
      <SEO title="Home" keywords={[`dev`, `software`, `engineer`]} lang="en" />
      <Intro />
      <About />
    </Layout>
  );
};

export default Home;
