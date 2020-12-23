import React from 'react';
import styled from 'styled-components';
import background from '../img/home.jpg';

export default function Home() {
    return (
        <>
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