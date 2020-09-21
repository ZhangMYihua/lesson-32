import React from 'react';
import { connect } from 'react-redux';
import {
  Router,
  Switch,
  Route,
  Link,
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
  CustomSpec,
  CustomLT
} from './collection-item.styles';

// import FurnitureSpecs from '../../components/product/furniture-specs.component'


const CollectionItem = ({ item, addItem , history, match}) => {
  const { name, price, imageUrl} = item;
  function newURL(){
    history.push(`${match.url}/${name}`)
  }

  return (
    <div>
      <CollectionItemContainer>
        <BackgroundImage className='image' imageUrl={imageUrl} 
        onClick={newURL}/>
        <CollectionFooterContainer>
          <NameContainer>{name}</NameContainer>
          <PriceContainer>S${price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={() => addItem(item)} inverted>
          Add to cart
        </AddButton>
        <CollectionFooterContainer>
        </CollectionFooterContainer>
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
