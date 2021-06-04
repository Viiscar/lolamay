import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import folder from '../../img/folder.svg'
import lipsticks from '../../img/lipsticks.svg';
import leaf from '../../img/leaf.svg'
import toxic from '../../img/toxic.svg'
import {gsap, Power3, Power4 } from "gsap";
import { useRef, useEffect } from "react";

function Facts() {
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
        rotation: 50,
        width: "200%",
        ease: Power3.easeInOut,
        delay: 0.3,
        });
        tl.to(screen, {
        duration: 0.3,
        x: 1100,
        ease: Power3.easeInOut,
        });
        tl.to(screen, {
            duration: 0,
            width: "0%",
            // rotation: 0,
            // x: 0,
            ease: Power3.easeInOut,
        });
        tl.set(screen, { left: "-550%" });
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
                <Container className="container text-justify d-lg-block">
                    <div className= "row">
                        <div className="mx-auto col-lg-6 col-sm-12 my-3">
                            <div className="title">
                                <Link to="/facts/safe-lipstick">
                                    <img className="title-image" src={lipsticks} alt={"lipstick"}></img>
                                </Link>
                                <h4 className="text-left">WHY SAFE LIPSTICK MATTERS</h4>
                            </div>
                            <p>Lips are sensitive and absorptive, which means that they
                            deserve special consideration because they’re close to the
                            mouth. Lips are covered by a layer of skin that is much thinner
                            than the skin that covers the rest of the face. It has
                            underneath a sensitive mucous membrane.</p>
                            <Link to="/facts/safe-lipstick">
                                <button>Read more &gt;</button>
                            </Link>
                        </div>
                        <div className="mx-auto col-lg-6 col-sm-12 my-3">
                            <div className="title">
                                <Link to="/facts/ingredients-to-avoid">
                                    <img className="title-image" src={toxic} alt={"toxic"}></img>                        </Link>
                                <h4>INGREDIENTS TO AVOID</h4>
                            </div>
                            <p>If you want to avoid ingesting harmful chemicas, this is the list
                            you need to read. Here are the top ingredients to avoid when
                            it comes to your makeup.</p>
                            <Link to="/facts/ingredients-to-avoid">
                                <button className="avoid-btn">Read more &gt;</button>
                            </Link>
                        </div>
                    </div>
                    <div className= "row">
                        <div className="mx-auto col-lg-6 col-sm-12 my-3">
                            <div className="title">
                                <Link to="/facts/non-toxic-lipstick">
                                    <img className="title-image" src={leaf} alt={"leaf"}></img>
                                </Link>
                                <h4>NON-TOXIC LIPSTICK</h4>
                            </div>
                            <p>Among the good components, here you’ll see non-toxic lipstick
                            ingredients that you won't be afraid to ingest, since they are
                            safe to your skin.</p>
                            <Link to="/facts/non-toxic-lipstick">
                                <button>Read more &gt;</button>
                            </Link>
                        </div>
                        <div className="mx-auto col-lg-6 col-sm-12 my-3">
                            <div className="title">
                                <Link to="/facts/fun-facts">
                                    <img className="title-image" src={folder} alt={"folder"}></img>
                                </Link>
                                <h4>FUN FACTS</h4>
                            </div>
                            <p>Here a list of fun facts about lipsticks.</p>
                            <Link to="/facts/fun-facts">
                                <button className="fun-btn" >Read more &gt;</button>
                            </Link>
                        </div>
                    </div>   
                </Container>
            </div>
        </>
    )
}

const Container = styled.div`
    .title{
        display: flex;
        align-items: center;
        padding: 1.5rem 1.5rem 1.5rem 0rem;
        img{
            padding-right: 0.8rem;
        }
    }
    .title-image{
        width: 155px;
    }
    p{
        font-size: 1.3rem;
    }
    button{
        font-size: 1.3rem;
        border: 1px solid black;
        color: black;
    }
    .avoid-btn{
        margin-top: 3.9rem;
    }
    .fun-btn{
        margin-top: 3.8rem;
    }
    @media only screen and (max-width: 1199px) {
        .avoid-btn{
        margin-top: 5.8rem;
        }
    }
    @media only screen and (max-width: 991px) {
        .avoid-btn{
        margin-top: auto;
        }
        .fun-btn{
            margin-top: auto;
        }
    }

`
export default Facts;
