import React from 'react';
import { connect } from 'react-redux';
import {
  withRouter
} from "react-router-dom";
import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  BackgroundImage,
  CollectionSpecificationsContainer,
  SpecDetailsContainer,
  TitleContainer,
  PriceSideContainer,
  AddButtonv2,
  ColorContainer,
  ColorContainerSettings} from './product-specifications.styles';

import {popover} from '../popovers/popovers-component'
import {OverlayTrigger} from 'react-bootstrap'

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
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <AddButtonv2 onClick = {() => addItem(item)}>
            Add to cart
          </AddButtonv2>
        </OverlayTrigger>
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
