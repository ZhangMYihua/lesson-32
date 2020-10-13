import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import OutdoorCollectionPage from './outdoorcollection.component';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const OutdoorCollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(OutdoorCollectionPage);

export default OutdoorCollectionPageContainer;
