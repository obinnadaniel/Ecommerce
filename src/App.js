import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { Switch, Route } from "react-router-dom";
import NavBar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/details';
import Default from './components/default';
import Modal from './components/modal';
import Checkout from './components/checkout';
import Cart from './components/cart/cart';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route component={Default} />
        </Switch> 
        <Modal/>
      </React.Fragment>
    )
  }
}

export default App;
// {this.props.location.pathname}