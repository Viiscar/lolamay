import React from 'react';
import {ProductConsumer} from '../../Context';
import Carroussel from './Carroussel';
import {ButtonContainer} from '../Button';
import Color from './Color';
import styled from 'styled-components';

function Details() {
    window.scrollTo(0, 0);
    return (
        <ProductConsumer>
            {
                (value)=>{
                    const {id, img , info, color, price, title, keyIngredients, ingredients, mayCointain, size, why}=value.detail;
                    let colorId = value.diplayedPrdt;
                    let product = color[colorId];

                    //Sets colorId to 0 for products that have less colors
                    if (product === undefined){
                        colorId = 0;
                        product = color[colorId];
                    }

                    let inCart = product.inCart;
                    let slider = product.slider;

                    return(
                        <Wrapper className="container py-5"> 
                            <div className="row">
                                <Carroussel img={img} title={title} slider={slider}/>
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <h4 className="title">{title}</h4>
                                    <h5>{id ===4 ? "Sent: " : "Color: "} {color[colorId].color}</h5>
                                    <Color/>
                                    <h4 className="price">
                                        <strong>
                                            <span>$</span>{price.toFixed(2)}
                                        </strong>
                                    </h4>
                                    <p> {info}</p>
                                    {why ? 
                                    <><p className="why">Why you should switch to all-natural deodorants?</p><p>{why}</p></>: ""}
                                    <h6 className="fontBold">Key Ingredients:</h6>
                                    {keyIngredients.map(item => (
                                        <p><span className="circle"></span>{item}</p>
                                    ))}
                                    <div className="btnContainer">
                                        <ButtonContainer 
                                            cart 
                                            disabled={inCart?true:false} 
                                            onClick={()=> {value.addToCart(id, colorId); value.openModal(id)}}>
                                            {inCart?"In Cart":"Add to Cart"}
                                        </ButtonContainer>
                                    </div>
                                    <div className="clean-formula">
                                        <p>All Alluance products are Paraben-free Sulfate-free, Phthalate-free, and Cruelty-free. Our formula does not contain silicones nor microplastics.</p>
                                    </div>
                                    <div className="ingredients">
                                        <p>INGREDIENTS: {ingredients}</p>

                                        <p>May Contain: {mayCointain}</p>
                                    </div>
                                    <div>
                                        <p>Handcrafted in Puerto Rico.</p>
                                        <p>Size {size}</p>
                                    </div>
                                </div>
                            </div>
                        </Wrapper>
                    )
                }
            }
        </ProductConsumer>
    )
}

const Wrapper = styled.div`
    .title{
        font-family: BookBldFLF;
        text-transform: uppercase;
    }
    .price{
        border-bottom: 1px solid var(--mainRed);
    }
    .why{
        color: var(--mainRed);
        font-weight: bold;
    }
    .fontBold{
        font-family: BookBldFLF;
    }
    .btnContainer{
        border-bottom: 1px solid var(--mainRed);
        padding-bottom: 1rem;
    }
    .clean-formula{
        padding-top: 1rem;
        border-bottom: 1px solid var(--mainRed);
    }
    .ingredients{
        padding-top: 1rem;
        border-bottom: 1px dashed var(--mainRed);
        margin-bottom: 1rem;
        text-indent: -1.8rem;
        padding-left: 1.8rem;
    }
    .circle{
        height: 12px;
        width: 12px;
        border: solid 2px var(--mainRed);
        border-radius: 50%;
        display: inline-block;
        margin-right: 0.3rem;
    }

    .color{
        margin-bottom: 0.5rem;
        display: flex;
    }

    .purple, .red, .yellow, .pink, .blue, .green, .beige, .black{
        height: 1rem;
        width: 1rem;
        margin-right: 4px;
        cursor: pointer;
    }

    .purple{
        background-color: purple;
    }

    .red{
        background-color: red;
    }

    .yellow{
        background-color: yellow;
    }

   .pink{
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

export default Details;