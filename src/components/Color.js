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
                                <div className="colorSquare purple" onClick={() => value.setColor(1, id)}></div>
                                <div className="colorSquare red" onClick={() => value.setColor(2, id)}></div>
                                <div className="colorSquare yellow" onClick={() => value.setColor(3, id)}></div>
                                <div className="colorSquare pink" onClick={() => value.setColor(4, id)}></div>
                                <div className="colorSquare blue" onClick={() => value.setColor(5, id)}></div>
                                <div className="colorSquare green" onClick={() => value.setColor(6, id)}></div>
                                <div className="colorSquare beige" onClick={() => value.setColor(7, id)}></div>
                                <div className="colorSquare black" onClick={() => value.setColor(8, id)}></div>
                            </div>
                            <div style={id === 2 ? {display : "flex"} : {display : "none"}}>
                                <div className="colorSquare purpbalm" onClick={() => value.setColor(1, id)}></div>
                                <div className="colorSquare redbalm" onClick={() => value.setColor(2, id)}></div>
                                <div className="colorSquare yellowbalm" onClick={() => value.setColor(3, id)}></div>
                                <div className="colorSquare pinkbalm" onClick={() => value.setColor(4, id)}></div>
                            </div>
                            <div style={id === 3 ? {display : "flex"} : {display : "none"}}>
                                <div className="colorSquare purpleblush" onClick={() => value.setColor(1, id)}></div>
                                <div className="colorSquare redblush" onClick={() => value.setColor(2, id)}></div>
                                <div className="colorSquare yellowblush" onClick={() => value.setColor(3, id)}></div>
                                <div className="colorSquare pinkblush" onClick={() => value.setColor(4, id)}></div>
                            </div>
                            <div style={id === 4 ? {display : "flex"} : {display : "none"}}>
                                <div className="colorSquare lavanda" onClick={() => value.setColor(1, id)}></div>
                                <div className="colorSquare lemom" onClick={() => value.setColor(2, id)}></div>
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