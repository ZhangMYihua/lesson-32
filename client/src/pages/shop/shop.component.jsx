import React, { useEffect } from 'react';
import { Route , withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import AllProductsPageContainer from '../../components/product/all-product.container';

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route exact
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
      <Route exact
        path={`${match.path}/:collectionId/:id`}
        component={AllProductsPageContainer}
      />
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
