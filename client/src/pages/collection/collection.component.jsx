import  React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

import {DropdownFilter} from '../../components/filterBar/Main.component';

const CollectionPage = ({ collection , match}) => {
  const { title, items} = collection;
  return (
    <CollectionPageContainer>
    <DropdownFilter collection = {collection}/>
      <CollectionTitle>{title.toUpperCase()} </CollectionTitle>
      <CollectionItemsContainer>
      {/* {items.filter(item =>item.type=== "Indoor").map(filteredItem => 
        <CollectionItem key={filteredItem.id} item={filteredItem} />)} */}
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};


const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
