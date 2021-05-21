import React from 'react';
import {ProductConsumer} from '../Context';
import styled from 'styled-components';

function Colors() {
    return (
        <ProductConsumer>
            {
                (value)=>{
                    const {id}=value.detail;
                    
                    return(
                        <Wrapper>
                            <div style={id === 1 ? {display : "flex"} : {display : "none"}}>
                                <div className="colorSquare purple" onClick={() => value.setColor("purple", id)}></div>
                                <div className="colorSquare red" onClick={() => value.setColor("red", id)}></div>
                                <div className="colorSquare yellow" onClick={() => value.setColor("yellow", id)}></div>
                                <div className="colorSquare pink" onClick={() => value.setColor("pink", id)}></div>
                                <div className="colorSquare blue" onClick={() => value.setColor("blue", id)}></div>
                                <div className="colorSquare green" onClick={() => value.setColor("green", id)}></div>
                                <div className="colorSquare beige" onClick={() => value.setColor("beige", id)}></div>
                                <div className="colorSquare black" onClick={() => value.setColor("black", id)}></div>
                            </div>
                            <div style={id === 2 ? {display : "flex"} : {display : "none"}}>
                                <div className="colorSquare purpbalm" onClick={() => value.setColor("purpbalm", id)}></div>
                                <div className="colorSquare redbalm" onClick={() => value.setColor("redbalm", id)}></div>
                                <div className="colorSquare yellowbalm" onClick={() => value.setColor("yellowbalm", id)}></div>
                                <div className="colorSquare pinkbalm" onClick={() => value.setColor("pinkbalm", id)}></div>
                            </div>
                            <div style={id === 3 ? {display : "flex"} : {display : "none"}}>
                                <div className="colorSquare purpleblush" onClick={() => value.setColor("purpleblush", id)}></div>
                                <div className="colorSquare redblush" onClick={() => value.setColor("redblush", id)}></div>
                                <div className="colorSquare yellowblush" onClick={() => value.setColor("yellowblush", id)}></div>
                                <div className="colorSquare pinkblush" onClick={() => value.setColor("pinkblush", id)}></div>
                            </div>
                            <div style={id === 4 ? {display : "flex"} : {display : "none"}}>
                                <div className="colorSquare lavanda" onClick={() => value.setColor("lavanda", id)}></div>
                                <div className="colorSquare lemom" onClick={() => value.setColor("lemom", id)}></div>
                            </div>
                        </Wrapper>
                    )
                }
            }
        </ProductConsumer>
    )
}

const Wrapper = styled.div`

    margin-bottom: 0.5rem;

    .colorSquare{
        height: 1rem;
        width: 1rem;
        margin-right: 4px;
        cursor: pointer;
    }

    .purple, .purpbalm, .purpleblush, .lavanda{
        background-color: purple;
    }

    .red, .redbalm, .redblush{
        background-color: red;
    }

    .yellow, .yellowbalm , .yellowblush, .lemom{
        background-color: yellow;
    }

   .pink, .pinkbalm, .pinkblush{
        background-color: pink;
    }

    .blue{
        background-color: blue;
    }

    .green{
        background-color: green;
    }

    .beige{
        background-color: beige;
    }

    .black{
        background-color: black;
    }
`

export default Colors;