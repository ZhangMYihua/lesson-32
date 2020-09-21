import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import AllProductsPage from './all-products.component';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const AllProductsPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(AllProductsPage);

export default AllProductsPageContainer;
