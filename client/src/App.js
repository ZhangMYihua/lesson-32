import React, { useEffect } from 'react';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import { GlobalStyle } from './global.styles';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import FurnitureSpecs from './components/product/furniture-specs.component'
import BasinSpecs from './components/product/basin-specs.component'
import HomeDecor from './components/product/homedecor-specs.component'
import SuppliesSpecs from './components/product/supplies-specs.component'
import TapSpecs from './components/product/tap-specs.component'

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        {/* <Route exact path='/shop/supplies/:id' component={SuppliesSpecs} />
        <Route exact path='/shop/basin/:id' component={BasinSpecs} />
        <Route exact path='/shop/tap/:id' component={TapSpecs} />
        <Route exact path='/shop/homedecor/:id' component={HomeDecor} /> */}
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
