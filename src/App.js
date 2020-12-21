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
import Facts from './components/Facts';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  return (
   <>
    <div id="page-container">
      <div id="content-wrap">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Productlist} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/facts" component={Facts} />
          <Route exact path="/about" component={About} />
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
