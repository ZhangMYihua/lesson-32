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
} from './product-specifications.styles';


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
        <CustomSpec> 
          Specification details: <br/> {item.description} 
        </CustomSpec>
        <CustomLT>Availability: <br/> {item.availability}
        </CustomLT>
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
