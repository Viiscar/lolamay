import React from 'react'
import styled from 'styled-components';
import logo from '../img/white-logo.png'

export default function About() {
    return (
        <Wrapper className= "row">
            <div className="left-block mx-auto col-lg-2 col-sm-1">
                <img src={logo} alt="logo"></img>
            </div>
            <div className="mx-auto col-lg-10 col-sm-12">
                <div className="d-flex align-items-end">
                    <div className="gradient"><span>A</span></div>
                    <div className="first-line"><p>lluance is a female Puerto Rican
                        owned cosmetic brand devoted to creating
                        fresh, cruelty-free, and handmade lipsticks.</p>
                    </div>
                </div>
                <div className="right-block">
                    <p>All lipsticks are made fresh by hand using
                    natural preservatives and organic ingredients.</p>

                    <p>By supporting Alluance's natural beauty
                    products, you will make a statement that you do
                    not want to support dangerous commercial
                    beauty products filled with chemicals that are
                    linked to cancer, hormone disruptions, and other
                    health problems.</p>

                </div>
                <div className="bottom-block">
                    <img src={logo} alt="cruelty free"></img>
                    <img src={logo} alt="natural"></img>
                    <img src={logo} alt="hand crafted"></img>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-size: 1.7rem;
    .left-block{
        background-color: var(--mainRed);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .right-block{
        text-align: justify;;
        margin: 0rem 10rem 1.5rem 15rem;
        /* transform: translate(0px, 4.2rem); */
    }
    .bottom-block{
        display: flex;
        justify-content: space-around;
        padding-top: 2rem;
    }
    .gradient{
        height: 12rem;
        width: 16rem;
        background-image: linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,0.2), rgba(0,0,0,0.3), rgba(0,0,0,0.4), rgba(0,0,0,0.5), rgba(0,0,0,0.6), rgba(0,0,0,0.7), rgba(0,0,0,0.8),rgba(0,0,0,0.9), black, black, black, black);
        position: relative;
        margin-bottom: 4.8rem;
        display: block;
        float: left;
    }
    .gradient span{
        color: var(--mainRed);
        font-size: 8rem;
        line-height: 0.6;
        position: absolute;
        bottom: 0px;
        right: 0px;
    }
    .first-line{
        /* transform: translate(-5rem, 0rem);
        p::first-line {
        background-color: yellow;
        line-height: 0.6;
        transform: translate(0rem, 0rem);
        } */
        
        margin-bottom: 0.5rem;
        margin-right: 10rem;
    }
    div{
        padding-left: 0px;
    }
`

//englober right block