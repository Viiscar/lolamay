import React from 'react'
import styled from 'styled-components';

export default function Contact() {
   
    return (
        
        <Wrapper className= "row">
            <div className="left-block mx-auto col-lg-1"></div>
            <div className="mx-auto col-lg-11 col-sm-12 padding-top center-block">
                <h1>CONTACT US</h1>
                <p>If you need more information contact us at contact<span>@</span>alluance.beauty</p>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-size: 1.7rem;
    .left-block{
        background-color: var(--mainRed);
    }
    h1,h2{
        padding: 1rem;
        text-align: center;
    }
    span{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.35rem;
    }
    .center-block{
        text-align: justify;
        padding-left: 8rem;
        padding-right: 8rem;
        padding-top: 5rem;
    }
    @media only screen and (max-width: 767px) {
        .center-block{
            padding-left: 4rem;
            padding-right: 4rem;
        }
    }
    @media only screen and (max-width: 582px) {
        .center-block{
            padding-left: 2rem;
            padding-right: 2rem;
        }
    }
`