import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './pages/About';

import ContactUs from './pages/ContactUs';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Product from './pages/Product';
import Products from './pages/Products';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/products/:category">
        <Products />
      </Route>
      <Route path="/product/:id">
        <Product />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/contact-us">
        <ContactUs />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default App;
