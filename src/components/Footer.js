import React from 'react';
import {Link} from 'react-router-dom';
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import darkLogo from '../img/dark-logo.svg';

function Footer() {

    const location = useLocation();
    const path = location.pathname;
    const linksColor = path === "/" ? "var(--mainWhite)" : "var(--mainGrey)";
    const logoRight = path === "/" ? "var(--mainGrey)" : "var(--mainWhite)";

    return (
        <footer>
            <LogoContainer style={{backgroundColor: logoRight}}>
                <img className="logo" src={darkLogo} alt="dark-logo"></img>
            </LogoContainer>
            <FooterLinks style={{backgroundColor: linksColor}}>
                <Link to='/terms-and-conditions'>
                    <p>TERMS & CONDITIONS</p>
                </Link>
                 <Link to='/privacy-policy'>
                    <p>PRIVACY POLICY</p>
                 </Link>
                 <Link to='/shipping-and-returns'>
                    <p>SHIPPING & RETURNS</p>
                 </Link>
                 <Link to='/contact'>
                    <p>CONTACT US</p>
                 </Link>
            </FooterLinks>
            <Copyright style={{backgroundColor: logoRight}}>
                <p>© 2021 ALLUANCE - ALL RIGHTS RESERVED</p>
            </Copyright>
        </footer>
    )
}

const LogoContainer = styled.div`
    text-align: center;
    .logo{
        width: 110px;
    }
`;

const FooterLinks = styled.div`
    a{
        text-decoration: none;
        color: var(--mainDark);
    }
    display: flex;
    justify-content: space-around;
    height: 1.5rem;
    @media only screen and (max-width: 566px) {
        display: block;
        height: auto;
        text-align: center;
    }
`

const Copyright = styled.div`
    text-align: center;
`
export default Footer;