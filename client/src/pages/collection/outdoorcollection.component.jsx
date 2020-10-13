import  React from 'react';
import { connect } from 'react-redux';

import OutdoorCollectionItem from '../../components/collection-item/outdoor-collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

import {DropdownFilter} from '../../components/filterBar/Main.component';

const OutdoorCollectionPage = ({ collection }) => {
  const { title, items } = collection;
  const getLastItem = `${window.location.href}`.substring(`${window.location.href}`.lastIndexOf('/') + 1)

  return (
    <CollectionPageContainer>
    <DropdownFilter collection = {collection}/>
      <CollectionTitle>{title.toUpperCase()} </CollectionTitle>
      <CollectionItemsContainer>
      {items.filter(item =>item.type=== `${getLastItem}`).map(filteredItem => 
        <OutdoorCollectionItem key={filteredItem.id} item={filteredItem} />)}
        {/* {items.map(item => (
          <OutdoorCollectionItem key={item.id} item={item} />
        ))} */}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};


const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(OutdoorCollectionPage);
