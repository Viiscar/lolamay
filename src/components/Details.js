import React from 'react';
import {ProductConsumer} from '../Context';
import Carroussel from './Carroussel';
import {ButtonContainer} from './Button';
import Color from './Color';
import styled from 'styled-components';

function Details() {
    return (
        <ProductConsumer>
            {//TypeError: can't access property 0, slides is undefined Carroussel.js
            // il semblerait que c'est que avec les lipsticks
                (value)=>{
                    const {id, img , info, color, price, title}=value.detail;
                    const colorId = value.diplayedPrdt;
                    let product = color[colorId-1];
                    // console.log("color", color);
                    // console.log("colorId", colorId);
                    // console.log("product", product);
                    let inCart = product.inCart;
                    let slider = product.slider;

                    
                    // for (let i =0; i<color.length; i++){
                    //    switch(color[].color){
                    //     case "red": //on peut le faire avec l'id aussi
                    //     slider=value.detail.color[i].slider;
                    //    }
                    // }
                    // switch (color) {
                    //     case "red":
                    //     slider=value.detail.slideRed;
                    //     break;
                    //     case "purple":
                    //     slider=value.detail.slidePrpl;
                    //     break;
                    //     case "yellow":
                    //     slider=value.detail.slideYllw;
                    //     break;
                    //     case "pink":
                    //     slider=value.detail.slidePnk;
                    //     break;
                    //     case "blue":
                    //     slider=value.detail.slideBlu;
                    //     break;
                    //     case "green":
                    //     slider=value.detail.slideGrn;
                    //     break;
                    //     case "beige":
                    //     slider=value.detail.slideBge;
                    //     break;
                    //     case "black":
                    //     slider=value.detail.slideBlck;
                    //     break;
                    //     case "purpbalm":
                    //     slider=value.detail.slidePrpBlm;
                    //     break;
                    //     case "redbalm":
                    //     slider=value.detail.slideRedBlm;
                    //     break;
                    //     case "yellowbalm":
                    //     slider=value.detail.slideYllwBlm;
                    //     break;
                    //     case "pinkbalm":
                    //     slider=value.detail.slidePnkBlm;
                    //     break;
                    //     case "purpleblush":
                    //     slider=value.detail.slidePrplBlsh;
                    //     break;
                    //     case "redblush":
                    //     slider=value.detail.slideRedBlsh;
                    //     break;
                    //     case "yellowblush":
                    //     slider=value.detail.slideYllwBlsh;
                    //     break;
                    //     case "pinkblush":
                    //     slider=value.detail.slidePnkBlsh;
                    //     break;
                    //     case "lavanda":
                    //     slider=value.detail.slideLavanda;
                    //     break;
                    //     case "lemom":
                    //     slider=value.detail.slideLemon;
                    //     break;
                    //     default:
                    //     slider=value.detail.slideRed;
                    // }
                    return(
                        <Wrapper className="container py-5"> 
                            <div className="row">
                                <Carroussel img={img} title={title} slider={slider}/>
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <h4 className="fontBold">{title}</h4>
                                    <h5>{id ===4 ? "Sent: " : "Color: "} {color[colorId-1].color}</h5>
                                    <Color/>
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
                                            onClick={()=> {value.addToCart(id, colorId); value.openModal(id)}}>
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