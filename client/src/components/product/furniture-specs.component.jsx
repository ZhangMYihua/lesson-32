import React from 'react';
import SHOP_DATA from '../../pages/shop/shop.data'
import { addItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import {
  Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
  CustomSpec,
  CustomLT
} from '../../components/collection-item/collection-item.styles';


const FurnitureSpecs = ({addItem, match}) => {
  const id = match.params.id
  // const data = SHOP_DATA[0]
  // const { name, price, imageUrl} = item;
  // const targetName = id;
  // const resultid = data.items
  //   .filter(e => e.name === targetName)
  //   .map(p => p.id);
  // const resultname = data.items
  //   .filter(e => e.name === targetName)
  //   .map(p => p.name);
  // const resultImageurl = data.items
  //   .filter(e => e.name === targetName)
  //   .map(p => p.imageUrl);
  // const resultPrice = data.items
  //   .filter(e => e.name === targetName)
  //   .map(p => p.price);
  // const resultdescription = data.items
  //   .filter(e => e.name === targetName)
  //   .map(p => p.description);
  // const resultavailability = data.items
  //   .filter(e => e.name === targetName)
  //   .map(p => p.availability);


    
  // const item = {
  //   id: resultid,
  //   name: resultname,
  //   imageUrl: resultImageurl,
  //   price: resultPrice,
  //   description:resultdescription,
  //   availability: resultavailability
  // }

    return(
      <div>
        {/* {resultname} <br />
        {resultdescription} <br />
        {resultavailability}  */}
        {id}
        {/* <CollectionItemContainer>
        <BackgroundImage className='image' imageUrl={item.imageUrl}/>
        <AddButton onClick={() => addItem(item)} inverted>
          Add to cart
        </AddButton>
        </CollectionItemContainer> */}
      </div>
    )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(FurnitureSpecs));