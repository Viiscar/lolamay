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
                    <h4 className="title pt-4">NON-TOXIC LIPSTICKS</h4>
                </div>
                <p className="text-justify p-4 bgWhite">Among the good components, here you’ll see non-toxic lipstick ingredients that you won't
                be afraid to ingest, since they are safe to your skin.</p>
            </div>
            <div className= "row">
                <div className="vertical-line center mx-auto col-lg-6 col-sm-12 py-3">
                    <img className="pb-5" src={Wax} alt={"lipstick"}></img>
                    <p className="text-justify cross-text">Organic waxes, oils and plant
                    butters, such as beeswax,
                    candelilla wax, carnauba wax,
                    cocoa butter, mango seed butter, shea
                    butter, avocado butter, avocado oil, and
                    coconut oil, among others.</p>
                </div>
                <div className="vertical-line-left center mx-auto col-lg-6 col-sm-12 py-3">
                    <img className="pb-5" src={Leaf} alt={"toxic"}></img>
                    <p className="text-justify cross-text">Organic castor seed oil, if it’s
                    hexane-free and cold pressed,
                    has many benefits—it’s moisturizing
                    and has anti-bacterial, anti-fungal, and
                    anti-viral properties.</p>
                </div>
            </div>
            <div className="row horizontal-line">
                <div className="vertical-line center mx-auto col-lg-6 col-sm-12 pb-5 pt-5 py-3">
                    <img className="pb-5" src={Pipette} alt={"leaf"}></img>
                    <p className="text-justify cross-text">Safe antioxidants and preservatives
                    are rosemary extract, elderberry
                    extract, neem oil, pure tocopherols
                    (vitamin E), and jojoba esters.</p>
                </div>
                <div className="vertical-line-left center mx-auto col-lg-6 col-sm-12 pb-5 pt-5 py-3">
                    <img className="pb-5" src={Vainilla} alt={"folder"}></img>
                    <p className="text-justify cross-text">Straightforward flavoring and aroma
                    ingredients, like vanilla planifolia fruit
                    extract, which aside from smelling
                    great, it also has antioxidant and
                    preservative properties.</p>
                </div>
            </div>
            <div className="center">
                <img src={blackLogo} alt="black logo"></img>
                <h4 className="key-ingredients bgWhite  p-4">Alluance Lipsticks Key Ingredients</h4>
            </div>
            <div className= "row">
                <div className="mx-auto col-lg-3 col-sm-6 py-3">
                    <div className="ingredients">
                        <h4  className="ingredients-title">Vitamin E</h4>
                        <p>provides powerful antioxidant protection.</p>
                    </div>
                </div>
                <div className="mx-auto col-lg-3 col-sm-6 py-3">
                    <div className="ingredients">
                        <h4  className="ingredients-title">Organic Castor Oil</h4>
                        <p>moisturizes and heals dry lips and has anti-bacterial properties.</p>
                    </div>
                </div>
                <div className="mx-auto col-lg-3 col-sm-6 py-3">
                    <div className="ingredients">
                        <h4  className="ingredients-title">Soya Lecithin</h4>
                        <p>retains moisture, keeping your skin soft, plump, and hydrated.</p>
                    </div>
                </div>
                <div className="mx-auto col-lg-3 col-sm-6 py-3">
                    <div className="ingredients">
                        <h4  className="ingredients-title">Candelilla Wax</h4>
                        <p>is rich in nutrients and helps bind ingredients together.</p>
                    </div>
                </div>
            </div>
            <h3 className="center p-4"><span>Alluance Lipsticks |</span> Paraben-free, Sulfate-free, Phthalate-free, Cruelty-free.</h3>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .title{
        font-family: BookFLF;
    }
    p{
        font-size: 1.7rem;
    }
    .key-ingredients, span{
        font-family: BookBldFLF;
    }
    .bgWhite{
        background-color: white;
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
    .ingredients-title{
        font-size: 1.5rem;
        font-family: BookBldFLF;
    }
    .cross-text::first-letter{
        /* initial-letter: 4;
        -webkit-initial-letter: 4; */
        float: left;
        font-size: 6rem;
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
    @media only screen and (max-width: 1199px) {
        .ingredients{
            padding: 0.2rem;
        }
        .ingredients-title{
            font-size: 1.45rem;
        }
    }
    @media only screen and (max-width: 991px) {
        .ingredients{
            padding: 1rem;
        }
        .ingredients-title{
            font-size: 1.5rem;
        }
        .horizontal-line{
        border-top: 0px;
        }
        .vertical-line-left{
            border-left: 3px solid var(--mainRed);
        }
        .vertical-line{
            border-right: 3px solid var(--mainRed);
        }
    }
    @media only screen and (max-width: 575px) {
        .ingredients{
            height: 11rem;
        }
    }
`

export default NonToxic;