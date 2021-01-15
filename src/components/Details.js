import React from 'react';
import {ProductConsumer} from '../Context';
import Carroussel from './Carroussel';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import styled from 'styled-components';

function Details() {
    return (
        <ProductConsumer>
            {
                (value)=>{
                    // console.log(value);
                    const {id, img , info, price, title, inCart}=value.detail;
                    return(
                        <Wrapper className="container py-5"> 
                            <div className="row">
                                <Carroussel img={img} title={title}/>
                                {/* <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt={title}></img>                             
                                </div> */}
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <h4 className="fontBold">CREAMY LURE LIPSTICK</h4>
                                    <h5>Color: {title}</h5>
                                    <h4 className="price">
                                        <strong>
                                            <span>$</span>{price.toFixed(2)}
                                        </strong>
                                    </h4>
                                    <p> {info}</p>
                                    <h6 className="fontBold">Key Ingredients:</h6>
                                    <p><span className="circle"></span>Organic Castor Oil is a great moisturizer, which acts as a natural barrier to preserve the water in your lips.</p>
                                    <p><span className="circle"></span>Vitamin E provides powerful antioxidant protection and promote intense hydration, which is ideal for your chapped lips.</p>
                                    <p><span className="circle"></span>Candelilla Wax is rich in nutrients and acts as a barrier agent to avoid the loss of moisture.</p>
                                    <div className="btnContainer">
                                        <Link to="/products">
                                            <ButtonContainer>
                                                Back to Products
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer 
                                            cart 
                                            disabled={inCart?true:false} 
                                            onClick={()=> {value.addToCart(id); value.openModal(id)}}>
                                            {inCart?"In Cart":"Add to Cart"}
                                        </ButtonContainer>
                                    </div>
                                    <div className="bottomBlock">
                                        <p>All Alluance Lipsticks are Paraben-free Sulfate-free, Phthalate-free, and Cruelty-free. Our formula does not contain silicones nor microplastics.</p>
                                        <p>Handcrafted in Puerto Rico.</p>
                                        <p>Size 0.12 oz / 3.4 g</p>
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
    .price{
        border-bottom: 1px solid var(--mainRed);
    }
    .fontBold{
        font-family: BookBldFLF;
    }
    .btnContainer{
        border-bottom: 1px solid var(--mainRed);
        padding-bottom: 1rem;
    }
    .bottomBlock{
        padding-top: 1rem;
        border-bottom: 1px dashed var(--mainRed);
    }
    .circle{
        height: 12px;
        width: 12px;
        border: solid 2px var(--mainRed);
        border-radius: 50%;
        display: inline-block;
        margin-right: 0.3rem;
    }
`

export default Details;