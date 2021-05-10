import React from 'react'
import styled from 'styled-components';
import plant from '../img/planta.png';
import {gsap, Power3, Power4 } from "gsap";
import { useRef, useEffect } from "react";

export default function About() {
    let screen = useRef(null);
    let body = useRef(null);
    useEffect(() => {
        var tl = gsap.timeline();
        tl.to(screen, {
        duration: 0,
        width: "100%",
        ease: Power3.easeInOut,
        });
        tl.to(screen, {
        duration: 1,
        width: "0%",
        ease: Power3.easeInOut,
        delay: 0.3,
        });
        tl.set(screen, { left: "-100%" });
        gsap.to(body, {
            duration: 2,
            opacity: "1",
            pointerEvents: "auto",
            ease: Power4.easeInOut
        });

        window.scrollTo(0, 0);
    });
    return (
        <>
            <div className="load-container">
                <div className="load-screen" ref={(el) => (screen = el)}></div>
            </div>
            <div data-barba="container">
            <div ref={(el) => (body = el)} className="Headd"></div>
                <Wrapper className= "row">
                    <div className="left-block mx-auto col-lg-1"></div>
                    <div className="mx-auto col-lg-9 col-sm-12 padding-top center-block">
                        
                        <p className="first-p">Alluance is a female Puerto Rican owned cosmetic brand devoted to creating fresh, cruelty-free, and handmade cosmetics.</p>
                    
                        <p>All products are made fresh by hand using
                        natural preservatives and beneficial ingredients.</p>

                        <p>By supporting Alluance's natural beauty
                        products, you will make a statement that you do
                        not want to support dangerous commercial
                        beauty products filled with chemicals that are
                        linked to cancer, hormone disruptions, and other
                        health problems.</p>
                        <img className="d-none d-lg-block" src={plant} alt="plant"></img>
                    </div>
                    <div className="col-lg-2 d-flex flex-column flex-md-row flex-lg-column align-items-center circles-container">
                        <span className="circles circ-black">CRUELTY FREE</span>
                        <span className="line"></span>
                        <span className="circles circ-red">GOOD for your skin</span>
                        <span className="line"></span>
                        <span className="circles circ-white">HAND CRAFTED</span>
                    </div>
                </Wrapper>
            </div>
        </>
    )
}

const Wrapper = styled.div`
    font-size: 1.7rem;
    .left-block{
        background-color: var(--mainRed);
    }
    .center-block{
        text-align: justify;
        padding-left: 8rem;
        padding-right: 8rem;
        padding-top: 5rem;
    }
    .first-p{
        line-height: 3rem;
    }
    .first-p::first-letter {
        font-size: 400%;
        color: var(--mainRed);
    }
    .circles-container{
        padding-top: 5rem;
    }
    .circles{
        height: 9rem;
        width: 9rem;
        line-height: 1.7rem;
        padding-top: 3rem;
        padding-left: 1rem;
        border-radius: 50%;
        display: inline-block;
    }
    .circ-black{
        background-color: black;
        color: var(--mainRed);
        box-shadow: -10px 5px 5px rgba(180, 183, 186, 0.7)
    }
    .circ-red{
        background-color: var(--mainRed);
        color: white;
        box-shadow: 0px -10px 5px rgba(180, 183, 186, 0.7)
    }
    .circ-white{
        background-color: white;
        color: var(--mainRed);
        box-shadow: 10px 5px 5px rgba(180, 183, 186, 0.7)
    }
    .line{
        height: 4rem;
        width:1px;
        background-color: var(--mainRed);
    }
    @media only screen and (max-width: 991px) {
        .line{
            height: 1px;
            width: 4rem;
            background-color: var(--mainRed);
        }
        .circles-container{
            justify-content: center;
            padding-top: 3rem;
            padding-bottom: 6rem;
        }
    }
    @media only screen and (max-width: 767px) {
        .center-block{
            padding-left: 4rem;
            padding-right: 4rem;
        }
        .circles-container{
            padding-top: 1rem;
        }
        .line{
            height: 4rem;
            width:1px;
        }
    }
    @media only screen and (max-width: 582px) {
        .center-block{
            padding-left: 2rem;
            padding-right: 2rem;
        }
    }
`