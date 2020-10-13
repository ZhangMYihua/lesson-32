import React, { useEffect } from 'react';
import { Route , withRouter, Switch} from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import AllProductsPageContainer from '../../components/product/all-product.container';
import OutdoorCollectionPageContainer from '../collection/outdoorcollection.container';

const ShopPage = ({ fetchCollectionsStart, match, collection }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  const filteroptions = ["Outdoor", "Indoor", "Sofa", "Bed", "Chair", "Table", "Sink", "W.C.", "New"]
  return (
    <div className='shop-page'>
      <Switch>
      <Route exact
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
      
      
      {filteroptions.map(option => {
        return (
          <Route exact
            path={`${match.path}/:collectionId/${option}`}
            component={OutdoorCollectionPageContainer} 
          />
        )
      })}
    
      <Route exact
        path={`${match.path}/:collectionId/:id`}
        component={AllProductsPageContainer}
      />

      {filteroptions.map(option => {
        return (
          <Route exact
            path={`${match.path}/:collectionId/${option}/:id`}
            component={AllProductsPageContainer}
          />
        )
      })}
       <Route
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />

    </Switch>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(ShopPage));
