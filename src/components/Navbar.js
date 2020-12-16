import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.jpg';
import styled from 'styled-components';

function Navbar () {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  
    return (
      <NavWrapper className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to='/'>
          <img src={logo} alt="store" className="main-logo"></img>
        </Link>
        <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
          <i className="fas fa-bars"></i>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
              <Link to="/products" className="nav-link">
                      LIPS
              </Link>
              <Link to="/products" className="nav-link">
                      FACTS
              </Link>
              <Link to="/products" className="nav-link">
                      ABOUT
              </Link>
              <Link to="/cart" className="nav-link cart">
                      CART
              </Link>
        </div>
      </NavWrapper>
    );
}

const NavWrapper = styled.nav`
    background-color: var(--mainWhite);
    height: 8rem;
    .main-logo {
        height: 7rem;
        pointer-events: none;
    }
    .cart{
        background-color: var(--mainRed);
        color: var(--mainWhite) !important;
        padding-right: 2rem;
        padding-left: 2rem;
    }
    .nav-link{
        font-family: BookFLF;
        color: black;
        margin-left: 2rem;
        font-size: 1.5rem;
    }
    .navbar-collapse{
        z-index: 5;
        position:absolute;
        right:0px;
    }
    .fa-bars{
        color: var(--mainRed);
        font-size:28px;
    }
    @media only screen and (max-width: 991px) {
        padding:0px;
        .main-logo{
            padding-left: 1rem;
        }
        button{
            margin-right: 1rem;
        }
        .navbar-collapse{
        position: relative;
        background-color: var(--mainGrey);
        }
        .nav-link{
        margin: auto;
        text-align: center;
        font-size: 1rem;
        }
        padding:0px;
        .main-logo{
            padding-left: 1rem;
        }
        button{
            margin-right: 1rem;
        }
    }
`;

export default Navbar;