import React from 'react';
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import darkLogo from '../img/dark-logo.png';

function Footer() {

    const location = useLocation();
    const path = location.pathname;
    const linksColor = path === "/" ? "var(--mainWhite)" : "var(--mainGrey)";
    const logoRight = path === "/" ? "var(--mainGrey)" : "var(--mainWhite)";

    return (
        <footer>
        {console.log(path)}
            <LogoContainer style={{backgroundColor: logoRight}}>
                <img src={darkLogo} alt="dark-logo"></img>
            </LogoContainer>
            <FooterLinks style={{backgroundColor: linksColor}}>
                <p>TERMS & CONDITIONS</p>
                <p>RETURNS</p>
                <p>SHIPPING</p>
                <p>CONTACT US</p>
            </FooterLinks>
            <Copyright style={{backgroundColor: logoRight}}>
                <p>© 2020 ALLUANCE - ALL RIGHTS RESERVED</p>
            </Copyright>
        </footer>
    )
}

const LogoContainer = styled.div`
    text-align: center;
`;

const FooterLinks = styled.div`
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