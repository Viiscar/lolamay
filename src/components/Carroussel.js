import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import im22 from './product-2.png';
import tarte1 from './tarte1.png';
import tarte2 from './tarte2.png';

function Carroussel(props) {
    //Selecting slides and buttons
    //A modifier avec les props

    const slides = document.querySelectorAll(".slide");

    //const [slides, setSlides] = useState(document.querySelectorAll(".slide"));

    // useEffect(() => {    
    //     setSlides(slider);  
    // },[slider]);
   
    //const slides = [im22, tarte1, tarte2, props.img]

    console.log(slides)
    //Initialising images counter to 0
    let counter = 0;

    //Defining left style for each slide
    slides.forEach(function (slide, index) {
        slide.style.left = `${index * 100}%`;           //a mettre avec le jsx?
    });

    //Carousel at work 
    function carousel() {

        if (counter >= slides.length){
            counter = 0;
        }
        if (counter <= -1){
            counter = slides.length -1;
        }
        slides.forEach(function (slide) {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        });
    }

    //Slider buttons Onclick
    function next(){
        counter++;
        carousel();
        console.log(counter); //0 ou -1
    }

    function prev(){
        counter--;
        carousel();
        console.log(counter); //0 ou -1
    }
    return (
        <Wrapper className="col-10 mx-auto col-md-6 my-3">
            <div className="slide">
                <img src={props.img} className="img-fluid slide-img" alt={props.title} />
            </div>
            <div className="slide">
                <img src={im22} className="img-fluid slide-img" alt="cueva ventana" />
            </div>
            <div className="slide">
                <img src={tarte1} className="slide-img" alt="playing guitar" />
            </div>
            <div className="slide">
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
    /* margin-top: 4rem; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    .slide {
    position: absolute;
    width: 100%;
    height: 100%;
    /* background-color: cyan; */
    text-align: center;
    transition: all 0.25s ease-in-out;
    }
    .slide-img {
    object-fit: cover;
    /* background-color: beige; */
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