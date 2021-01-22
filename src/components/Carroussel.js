import React, { useState } from 'react'
import styled from 'styled-components';
import im22 from './product-2.png';
import tarte1 from './tarte1.png';
import tarte2 from './tarte2.png';

function Carroussel(props) {
    
    //State
    const [translatex, setTranslatex] = useState(0);//css translateX value
    const [counter, setCounter] = useState(1); //positive counter
    const [counterLess, setCounterLess] = useState(3)//negative counter
    const [counterPast, setCounterPast] = useState(); //past counter value
    const [toRight, setToRight] = useState();// Slider direction to right
    const [directionChange, setDirectionChange] = useState(false); //change of direction

    const slides = [im22, tarte1, tarte2, props.img]

    let moveSlide = {
        transform: 'translateX('+translatex*100+'%)'
    };

    //Slider buttons Onclick
    function next(){
        setCounterPast(counter)
        if (counter >= slides.length){
            setCounterLess(1)
            setCounter(1);
            setTranslatex(0)
        }else{
            setCounterLess(counter+1)
            setCounter(counter+1);
            setTranslatex(-counter)
        }
        setToRight(true)
    }

    function prev(){
        if(toRight){
            let t = counterPast-1
            setTranslatex(-t);
            setCounter(t);
            setCounterLess(t);
            setDirectionChange(true);
        }
        else if (counterLess-1 <= -1){
            setCounterLess(slides.length-1)
            setCounter(slides.length-1);
            if(directionChange){
                setTranslatex(-3)
            }else{
                setTranslatex(0);
            }
        }else{
            setCounterLess(counterLess-1);
            setCounter(counterLess-1);
            if(directionChange){
                let t = counterLess-1
                setTranslatex(-t)
            }else{
                setTranslatex(-counterLess)
            }
        }
        setToRight(false)
    }
    return (
        <Wrapper className="col-10 mx-auto col-md-6 my-3">
            <div className="slide" id="slide1" style={moveSlide}>
                <img src={props.img} className="img-fluid slide-img" alt={props.title} />
            </div>
            <div className="slide" id="slide2" style={moveSlide}>
                <img src={im22} className="img-fluid slide-img" alt="cueva ventana" />
            </div>
            <div className="slide" id="slide3" style={moveSlide}>
                <img src={tarte1} className="slide-img" alt="playing guitar" />
            </div>
            <div className="slide"  id="slide4" style={moveSlide}>
                <img src={tarte2} className="slide-img" alt="man with seagull" />
            </div>
            <span onClick={()=>prev()} className="sliderButtons" id="prev"></span>
            <span onClick={()=>next()} className="sliderButtons" id="next"></span>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 0 auto;
    height: 60vh;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .slide {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: all 0.25s ease-in-out;
    }
    .slide-img {
        object-fit: cover;
        //background-color: beige;
    }
    .sliderButtons{
        width: 25px;
        height: 25px;
        margin: 5px;
        background-color: transparent;
        z-index: 7;
        transform: translateY(-200%);
        cursor: pointer;
    }
    #prev{
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-right: 20px solid var(--mainRed);
        border-bottom: 10px solid transparent;
    }
    #next{
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-left: 20px solid var(--mainRed);
        border-bottom: 10px solid transparent;
    }
    #slide1{
        left: 0%;
    }
    #slide2{
        left: 100%
    }
    #slide3{
        left: 200%
    }
    #slide4{
        left: 300%
    }
    @media only screen and (max-width: 414px) {
        height: 345px;
        .sliderButtons{
            transform: translateY(0%);
        }
    }
    @media only screen and (max-width: 375px) {
        height: 313px;
    }
    @media only screen and (max-width: 375px) {
        height: 300px;
    }
`

export default Carroussel;