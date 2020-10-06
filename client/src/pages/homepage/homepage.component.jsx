import React from 'react';

import Directory from '../../components/directory/directory.component';

import { HomePageContainer,
  BackgroundImageContainer,  MenuItemContainer,
  ContentContainer, ContentTitle} from './homepage.styles';

const HomePage = () => (
  <div>
      <MenuItemContainer>
        <BackgroundImageContainer imageUrl="https://i.ibb.co/R3wwkwg/jason-briscoe-UV81-E0o-XXWQ-unsplash.jpg" />
        <ContentContainer>
          <ContentTitle>B-GALLERY ONLINE STORE</ContentTitle>
        </ContentContainer>
        <BackgroundImageContainer imageUrl="https://i.ibb.co/VCjmyx1/outsite-co-R-LK3sq-Li-Bw-unsplash.jpg"  />
      </ MenuItemContainer>
    <HomePageContainer>
      <Directory />
    </ HomePageContainer>
  </div>
);

export default HomePage;
