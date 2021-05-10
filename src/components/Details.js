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
                                    <p><span className="circle"></span>Coconut Oil adds moisture, and keeps your skin soft, smooth, and hydrated.</p>
                                    <p><span className="circle"></span>Avocado Oil is an excellent source of antioxidants, such as vitamin E, and hydration that lasts longer on the lips's surface.</p>
                                    <p><span className="circle"></span>Almond Oil helps to rejuvenate your lips by removing the dead skin cells, prevent chapped lips and keeps them moisturized.</p>
                                    <div className="btnContainer">
                                        <ButtonContainer 
                                            cart 
                                            disabled={inCart?true:false} 
                                            onClick={()=> {value.addToCart(id); value.openModal(id)}}>
                                            {inCart?"In Cart":"Add to Cart"}
                                        </ButtonContainer>
                                    </div>
                                    <div className="clean-formula">
                                        <p>All Alluance Lipsticks are Paraben-free Sulfate-free, Phthalate-free, and Cruelty-free. Our formula does not contain silicones nor microplastics.</p>
                                    </div>
                                    <div className="ingredients">
                                        <p>INGREDIENTS: Ricinus Communis (Castor) Seed Oil, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Persea Gratissima (Avocado) Oil, Cocos nucifera (Coconut) Oil, Candelilla Wax, CERA ALBA (Beeswax), Isododecane, Tocopheryl Acetate (Vitamin E).</p>

                                        <p>May Contain: Red 7 (16255), Titanium Dioxide (77891), Iron Oxide (77491), Kaolin Clay, Carmine (75470), Red 40 (16035), Iron Oxide (77499), Iron Oxide (77492), Red 30 (73360), Iron Oxide (77499), Iron Oxide (77499) (77491) (77492), Yellow #5 (19140), Magnesium Myristate, Manganese Violet (77742), Norbornanediamine/Resorcinol Diglycidyl Ether Crosspolymer, Aluminum Hydroxide, Red 28 (45410), Red 22 (45380).</p>
                                    </div>
                                    <div>
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
`

export default Details;