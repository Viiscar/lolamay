import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

function Navbar() {
    return (
        <NavWrapper className="navbar navbar-expand-sm px-sm-5">
            <Link to='/'>
                <img src={logo} alt="store" className="navbar-brand App-logo"></img>
            </Link>
            <ul className="navbar-nav align-item-center">
                <li className="nav-item ml-5">
                    <Link to="/products" className="nav-link">
                        Products
                    </Link>
                </li>
            </ul>
            <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                     <i className="fas fa-cart-plus" />
                    </span>
                    My Cart
                </ButtonContainer>
            </Link>
        </NavWrapper>
    )
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color: var(--mainWhite);
    font-size: 1.3rem;
}
`

export default Navbar