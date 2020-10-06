import About from '../../components/about-us/about-us.component'

import React from 'react';

import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from '../homepage/homepage.styles';

const LandingPage = () => (
  <HomePageContainer>
      <About />
    <Directory />
  </HomePageContainer>
);

export default LandingPage;
