import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Productlist from './components/Productlist';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import Facts from './components/Facts/Facts';
import Fun from './components/Facts/Fun';
import Avoid from './components/Facts/Avoid';
import Safe from './components/Facts/Safe';
import Toxic from './components/Facts/Non-toxic';
import About from './components/About';
import Footer from './components/Footer';
import Conditions from './components/Conditions';
import Privacy from './components/Privacy';
import Shipping from './components/Shipping';
import Contact from './components/Contact';


function App() {
  return (
   <>
    <div id="page-container">
      <div id="content-wrap">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Productlist} />
          <Route exact path="/lipstick" component={Details} />
          <Route exact path="/lipbalm" component={Details} />
          <Route exact path="/blush" component={Details} />
          <Route exact path="/deodorant" component={Details} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/facts" component={Facts} />
          <Route exact path="/about" component={About} />
          <Route exact path="/facts/safe-lipstick" component={Safe} />
          <Route exact path="/facts/ingredients-to-avoid" component={Avoid} />
          <Route exact path="/facts/non-toxic-lipstick" component={Toxic} />
          <Route exact path="/facts/fun-facts" component={Fun} />
          <Route exact path="/terms-and-conditions" component={Conditions} />
          <Route exact path="/privacy-policy" component={Privacy} />
          <Route exact path="/shipping-and-returns" component={Shipping} />
          <Route exact path="/contact" component={Contact} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </div>
      <Footer></Footer>
    </div>
   </>
  );
}

export default App;
