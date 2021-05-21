import React from 'react';
import Product from "./Product";
import {ProductConsumer} from "../Context";
import {gsap, Power3, Power4 } from "gsap";
import { useRef, useEffect } from "react";

function Productlist() {
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
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-10 mx-auto my-2 text-center text-title">
                                <h4 className="font-weight-bold">
                                    ALLUANCE COLLECTION
                                </h4>
                            </div>
                        </div>
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product} />
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Productlist;