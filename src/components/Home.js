import React from 'react';
import styled from 'styled-components';
import background from '../img/home.jpg';
import {gsap, Power3, Power4 } from "gsap";

import { useRef, useEffect } from "react";

export default function Home() {
    let screen = useRef(null);
    let body = useRef(null);
    useEffect(() => {

        var tl = gsap.timeline();
        tl.to(screen, {
        duration: 0,
        height: "100%",
        ease: Power3.easeInOut,
        });
        tl.to(screen, {
        duration: 1,
        top: "100%",
        ease: Power3.easeInOut,
        delay: 0.3,
        });
        tl.set(screen, { left: "-100%" });
        gsap.to(body, {
            duration: 2,
            opacity: "1",
            pointerEvents: "auto",
            ease: Power4.out
        });

        window.scrollTo(0, 0);
    });
    return (
        <>
            <div className="load-container">
                <div className="load-screen1" ref={(el) => (screen = el)}></div>
            </div>
            <div data-barba="container">
                <div ref={(el) => (body = el)} className="Headd">
                    <DivWrapper className="homeImg">   
                        <div className="left-text-container">
                            <div className="left-text">
                                <p>ALL NATURAL</p>
                                <p> HANDCRAFTED</p>
                                <p>HIGH QUALITY</p>
                            </div>
                            <span>Lipsticks</span>
                        </div>
                    </DivWrapper>
                </div>
            </div>
        </>
    )
}

const DivWrapper = styled.div`
    background-image: url(${background});
    background-color: #cccccc;
    height: 700px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    .left-text-container{
    background-color: rgba(255,255,255,0.7);
    color: var(--mainRed);
    font-size: 2.5rem;
    position: absolute;
    top: 20%;
    padding: 2rem;
    padding-bottom: 0rem;
    }
    .left-text {
    border-left: 0.45rem solid var(--mainRed);
    padding-left: 0.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    }
    .left-text p {
    padding: 1px;
    margin: 0px;
    }
    .left-text-container span{
    font-family: One Signature;
    font-size: 5.5rem;
    padding-left: 3rem;
    }
`;