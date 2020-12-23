import React from 'react'
import Toxic from '../../img/leaf.jpg';
import Wax from '../../img/wax.png';
import Leaf from '../../img/leaf.png';
import Vainilla from '../../img/vainilla.png';
import Pipette from '../../img/pipette.png';
import blackLogo from '../../img/dark-logo.png'
import styled from 'styled-components';

function NonToxic() {
    return (
        <Wrapper className="container">
            <div className="center">
                <div className="p-5">
                    <img src={Toxic} alt="leaf"></img>
                    <h4 className="pt-4">NON-TOXIC LIPSTICKS</h4>
                </div>
                <p className="text-justify p-4 bgWhite">Among the good components, here you’ll see non-toxic lipstick ingredients that you won't
                be afraid to ingest, since they are safe to your skin.</p>
            </div>
            <div className= "row">
                <div className="vertical-line center mx-auto col-lg-6 col-sm-12 py-3">
                    <div className="title">
                        <img className="pb-5" src={Wax} alt={"lipstick"}></img>
                    </div>
                    <p className="text-justify cross-text">Organic waxes, oils and plant
                    butters, such as beeswax,
                    candelilla wax, carnauba wax,
                    cocoa butter, mango seed butter, shea
                    butter, avocado butter, avocado oil, and
                    coconut oil, among others.</p>
                </div>
                <div className="center mx-auto col-lg-6 col-sm-12 py-3">
                    <div className="title">
                        <img className="pb-5" src={Leaf} alt={"toxic"}></img>
                    </div>
                    <p className="text-justify cross-text">Organic castor seed oil, if it’s
                    hexane-free and cold pressed,
                    has many benefits—it’s moisturizing
                    and has anti-bacterial, anti-fungal, and
                    anti-viral properties.</p>
                </div>
            </div>
            <div className="row horizontal-line">
                <div className="vertical-line center mx-auto col-lg-6 col-sm-12 pt-5 py-3">
                    <div className="title">
                        <img className="pb-5" src={Pipette} alt={"leaf"}></img>
                    </div>
                    <p className="text-justify cross-text">Safe antioxidants and preservatives
                    are rosemary extract, elderberry
                    extract, neem oil, pure tocopherols
                    (vitamin E), and jojoba esters.</p>
                </div>
                <div className="center mx-auto col-lg-6 col-sm-12 pt-5 py-3">
                    <div className="title">
                        <img className="pb-5" src={Vainilla} alt={"folder"}></img>
                    </div>
                    <p className="text-justify cross-text">Straightforward flavoring and aroma
                    ingredients, like vanilla planifolia fruit
                    extract, which aside from smelling
                    great, it also has antioxidant and
                    preservative properties.</p>
                </div>
            </div>
            <div className="center">
                <img src={blackLogo} alt="black logo"></img>
                <h4 className="bgWhite font-weight-bold">Alluance Lipsticks Key Ingredients</h4>
            </div>
            <div className= "row">
                <div className="mx-auto col-lg-3 col-sm-12 py-3">
                    <div className="ingredients">
                        <div className="title">
                            <h4>Vitamin E</h4>
                        </div>
                        <p>provides powerful antioxidant protection.</p>
                    </div>
                </div>
                <div className="mx-auto col-lg-3 col-sm-12 py-3">
                    <div className="ingredients">
                        <div className="title">
                            <h4>Organic Castor Oil</h4>
                        </div>
                        <p>moisturizes and heals dry lips and has anti-bacterial properties.</p>
                    </div>
                </div>
                <div className="mx-auto col-lg-3 col-sm-12 py-3">
                    <div className="ingredients">
                        <div className="title">
                            <h4>Soya Lecithin</h4>
                        </div>
                        <p>retains moisture, keeping your skin soft, plump, and hydrated.</p>
                    </div>
                </div>
                <div className="mx-auto col-lg-3 col-sm-12 py-3">
                    <div className="ingredients">
                        <div className="title">
                            <h4>Candelilla Wax</h4>
                        </div>
                        <p>is rich in nutrients and helps bind ingredients together.</p>
                    </div>
                </div>
            </div>
            <h4 className="bgWhite center font-weight-bold">Alluance Lipsticks | Paraben-free, Sulfate-free, Phthalate-free, Cruelty-free.</h4>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    h4{
        font-weight: bold;
        font-size: 1.7rem;
    }
    p{
        font-size: 1.7rem;
    }
    .bgWhite{
        background-color: white;
        max-width: 200%;
    }
    .center{
        text-align: center;
    }
    .ingredients{
        background-color: var(--mainRed);
        color: white;
        padding: 1rem;
        text-align: left;
        height: 15rem;
        box-shadow: 6px 6px #b3b3b3;
    }
    span{
        font-size: 6rem;
    }
    .cross-text::first-letter{
        /* initial-letter: 4;
        -webkit-initial-letter: 4; */
        color: var(--mainRed);
        float: left;
        font-size: 6rem;
        /* padding-top: 0.5rem;
        padding-right: 0.1rem;;
        padding-left: 0px; */
        /* font-size: 75px; */
        line-height: 60px;
        padding-top: 10px;
        padding-right: 0px;
        padding-left: 0px;
    }
    .vertical-line{
        border-right: 1px solid var(--mainRed);
    }
    .horizontal-line{
        border-top: 1px solid var(--mainRed);
    }
`

export default NonToxic;