import React from 'react';
import { connect } from 'react-redux';
import {
  withRouter
} from "react-router-dom";
import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
  CollectionSpecificationsContainer,
  SpecDetailsContainer,
  TitleContainer,
  PriceSideContainer,
  AddButtonv2,
  ColorContainer,
  ColorContainerSettings} from './product-specifications.styles';

const CollectionItem = ({ item, addItem , history, match}) => {
  const { name, price, imageUrl} = item;

  return (
    <CollectionSpecificationsContainer>
      <CollectionItemContainer> 
      <BackgroundImage className='image' imageUrl={imageUrl} />
      </CollectionItemContainer>
      <SpecDetailsContainer>
        <TitleContainer>
          {name}
        </TitleContainer>
        <PriceSideContainer>
          S${price}
        </PriceSideContainer>
        <ColorContainerSettings>
        <ColorContainer>Color: </ColorContainer>
          Brown
        </ColorContainerSettings>
        <AddButtonv2 onClick = {() => addItem(item)}>
          Add to cart
        </AddButtonv2>
      </SpecDetailsContainer>
    </CollectionSpecificationsContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(CollectionItem));
