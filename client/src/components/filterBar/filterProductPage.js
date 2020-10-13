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
} from './collection-item.styles';

import {popover} from '../popovers/popovers-component'
import {OverlayTrigger} from 'react-bootstrap'

const CollectionItem = ({ item, addItem , history, match}) => {
  const { name, price, imageUrl} = item;
  function newURL(){
    history.push(`${match.url}/${name}`)
    // window.open(`${match.url}/${name}`);window.open(`${match.url}`,'_self');
  }

  return (
    <div>
      <CollectionItemContainer > 
        <BackgroundImage className='image' imageUrl={imageUrl} 
        onClick={newURL} />
        <CollectionFooterContainer>
          <NameContainer>{name}</NameContainer>
          <PriceContainer>S${price}</PriceContainer>
        </CollectionFooterContainer>
        <OverlayTrigger trigger="click" placement="top" overlay={popover}>
          <AddButton onClick={() => addItem(item)} inverted>
            Add to cart
          </AddButton>
        </OverlayTrigger>
      </CollectionItemContainer>
    </div>

  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(CollectionItem));
