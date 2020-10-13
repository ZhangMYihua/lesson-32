import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from './product-specifications.component';

import { selectCollectionProduct } from '../../redux/shop/shop.selectors';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from '../../pages/collection/collection.styles';



const AllProductsPage = ({collection, match}) => {
// const id = match.params.id
// const targetName = id;
// const resultid = collection.items
//   .filter(e => e.name === targetName)
//   .map(p => p.id);
// const resultname = collection.items
//   .filter(e => e.name === targetName)
//   .map(p => p.name);
// const resultImageurl = collection.items
//   .filter(e => e.name === targetName)
//   .map(p => p.imageUrl);
// const resultPrice = collection.items
//   .filter(e => e.name === targetName)
//   .map(p => p.price);
// const resultdescription = collection.items
//   .filter(e => e.name === targetName)
//   .map(p => p.description);
// const resultavailability = collection.items
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

const item = collection[0]

  return (

    <CollectionPageContainer>
      <CollectionTitle>{match.params.collectionId.toUpperCase()}</CollectionTitle>
      <CollectionItemsContainer>
          <CollectionItem key={collection.id} item={item} />
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollectionProduct(ownProps.match.params.collectionId, ownProps.match.params.id)(state)
  collection: selectCollectionProduct(ownProps.match.params.collectionId, ownProps.match.params.id)(state)
});

export default connect(mapStateToProps)(AllProductsPage);
