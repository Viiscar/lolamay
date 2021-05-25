import React, { useState } from 'react'
// import Color from './Color';
import styled from 'styled-components';

function Carroussel(props) {
    //State
    const [translatex, setTranslatex] = useState(0);//css translateX value
    const [counter, setCounter] = useState(1); //positive counter
    const [counterLess, setCounterLess] = useState(3)//negative counter
    const [counterPast, setCounterPast] = useState(); //past counter value
    const [toRight, setToRight] = useState();// Slider direction to right
    const [directionChange, setDirectionChange] = useState(false); //change of direction

    //let defaultlider = ["img/red-lipstick.jpeg", "img/tarte1.png", "img/tarte2.png", "img/product-1.png"];
    let slides = props.slider;

    // if (slides === undefined){
    //     slides = defaultlider;
    //     setTimeout(function(){ slides = props.slider }, 500);
    // }

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
                <img src={slides[0]} className="img-fluid slide-img" alt={props.title} />
            </div>
            <div className="slide" id="slide2" style={moveSlide}>
                <img src={slides[1]} className="img-fluid slide-img" alt={props.title} />
            </div>
            <div className="slide" id="slide3" style={moveSlide}>
                <img src={slides[2]} className="slide-img" alt={props.title}/>
            </div>
            <div className="slide"  id="slide4" style={moveSlide}>
                <img src={slides[3]} className="slide-img" alt={props.title} />
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