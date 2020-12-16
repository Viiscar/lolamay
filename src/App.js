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
import Footer from './components/Footer';


function App() {
  return (
   <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Productlist} />
      <Route exact path="/details" component={Details} />
      <Route exact path="/cart" component={Cart} />
      <Route component={Default} />
    </Switch>
    <Modal />
    <Footer></Footer>
   </>
  );
}

export default App;
