import React, { useState } from 'react';
import Toxic from '../../img/toxic.svg';
import styled from 'styled-components';

function Avoid() {
    const [isCollapsed1, setisCollapsed1] = useState(false);
    const [isCollapsed2, setisCollapsed2] = useState(false);
    const [isCollapsed3, setisCollapsed3] = useState(false);
    const [isCollapsed4, setisCollapsed4] = useState(false);
    const [isCollapsed5, setisCollapsed5] = useState(false);
    const [isCollapsed6, setisCollapsed6] = useState(false);
    const [isCollapsed7, setisCollapsed7] = useState(false);
    const [isCollapsed8, setisCollapsed8] = useState(false);
    const [isCollapsed9, setisCollapsed9] = useState(false);
    const [isCollapsed10, setisCollapsed10] = useState(false);
    const [isCollapsed11, setisCollapsed11] = useState(false);
    const [isCollapsed12, setisCollapsed12] = useState(false);
    const [isCollapsed13, setisCollapsed13] = useState(false);
    const [isCollapsed14, setisCollapsed14] = useState(false);
    const [isCollapsed15, setisCollapsed15] = useState(false);
  
    function handleCollapse(number){ 
        switch(number) {
            case 2:
                setisCollapsed2(!isCollapsed2);
                break;
            case 3:
                setisCollapsed3(!isCollapsed3);
                break;
            case 4:
                setisCollapsed4(!isCollapsed4);
                break;
            case 5:
                setisCollapsed5(!isCollapsed5);
                break;
            case 6:
                setisCollapsed6(!isCollapsed6);
                break;
            case 7:
                setisCollapsed7(!isCollapsed7);
                break;
            case 8:
                setisCollapsed8(!isCollapsed8);
                break;
            case 9:
                setisCollapsed9(!isCollapsed9);
                break;
            case 10:
                setisCollapsed10(!isCollapsed10);
                break;
            case 11:
                setisCollapsed11(!isCollapsed11);
                break;
            case 12:
                setisCollapsed12(!isCollapsed12);
                break;
            case 13:
                setisCollapsed13(!isCollapsed13);
                break;
            case 14:
                setisCollapsed14(!isCollapsed14);
                break;
            case 15:
                setisCollapsed15(!isCollapsed15);
                break;
            default:
                setisCollapsed1(!isCollapsed1);
        }
    }
    return (
        <Wrapper className="container">     
            <div className="text-center p-5">
                <img className="title-image" src={Toxic} alt="toxic"></img>
                <h4 className="title pt-4">LIPSTICK INGREDIENTS TO AVOID</h4>
            </div>
            <div className="pb-4">
                <div  onClick={() => handleCollapse(1)} className="collapse-container">
                        <div className="collapse-title">
                            <h5>
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Aluminum</a>
                            </h5>
                            <div className="collapse-button"><span></span></div>
                        </div>
                        <div id="collapse1" className={!isCollapsed1 ? "collapse" : ""}>
                            <div className="collapse-text">Added to sunscreens and sunblocks.  Aluminum is a pro-oxidant and could significantly increase the potential for oxidative damage in the skin. Aluminium is a known systemic toxicant at high doses.</div>
                        </div>
                </div>
                <div  onClick={() => handleCollapse(2)} className="collapse-container">
                        <div className="collapse-title">
                            <h5>
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Artificial Fragrance/Parfum</a>
                            </h5>
                            <div className="collapse-button"><span></span></div>
                        </div>
                        <div id="collapse2" className={!isCollapsed2 ? "collapse" : ""}>
                            <div className="collapse-text">Almost every single conventional skincare and cosmetic product (even “unscented” ones) contains artificial fragrances. Manufacturers aren’t required to reveal what’s actually in their fragrances, so you’ll simply see Fragrance or Parfum on the ingredients list when it could actually be a cocktail of carcinogens, allergens, endocrine disruptors, and irritants.
                            Fragrance is basically a blend of aromatic extracts from natural and synthetic ingredients. Used in nearly 50% of beauty products, it actually has a lot of unknown toxic chemicals that can be harmful to you. Without you knowing, fragrance can irritate skin, have toxic hormonal effects, and may even cause cancer. It may smell fabulous, but it can lead to not-so-fabulous effects on your skin and health. As an alternative, try to find natural fragrances that are chemical free.</div>
                        </div>
                </div>
                <div  onClick={() => handleCollapse(3)} className="collapse-container">
                    <div className="collapse-title">
                        <h5>
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">Benzalkonium Chloride</a>
                        </h5>
                        <div className="collapse-button"><span></span></div>
                    </div>
                    <div id="collapse3" className={!isCollapsed3 ? "collapse" : ""}>
                        <div className="collapse-text">A disinfectant used as a preservative and surfactant associated with severe skin, eye, and respiratory irritation and allergies. Found in: sunscreens, moisturizers.</div>
                    </div>
                </div>
                <div onClick={() => handleCollapse(4)} className="collapse-container">
                    <div className="collapse-title">
                        <h5>
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">Butylatedhydroxy Anisole and Butylated Hydroxytoluene</a>
                        </h5>
                        <div className="collapse-button ButyBtn"><span></span></div>
                    </div>
                    <div id="collapse4" className={!isCollapsed4 ? "collapse" : ""}>
                        <div className="collapse-text">Synthetic antioxidants used to extend shelf life. They are likely carcinogens and hormone disruptors and may cause liver damage. Found in: lipsticks, moisturizers, diaper creams, and other cosmetics.</div>
                    </div>
                </div>
                <div onClick={() => handleCollapse(5)} className="collapse-container">
                    <div className="collapse-title">
                        <h5>
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse5">Formaldehyde</a>
                        </h5>
                        <div className="collapse-button"><span></span></div>
                    </div>
                    <div id="collapse5" className={!isCollapsed5 ? "collapse" : ""}>
                        <div className="collapse-text">Formaldehyde is used as a preservative in cosmetics. It’s a known carcinogen that is also linked to asthma, neurotoxicity, and developmental toxicity. It can be found in preservatives such as quaternium-15, DMDM hydantoin, and imidazolidinyl urea.</div>
                    </div>
                </div>
                <div onClick={() => handleCollapse(6)} className="collapse-container">
                    <div className="collapse-title">
                        <h5>
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse6">Methylparaben</a>
                        </h5>
                        <div className="collapse-button"><span></span></div>
                    </div>
                    <div id="collapse6" className={!isCollapsed6 ? "collapse" : ""}>
                        <div className="collapse-text">Methylparaben is added to lipstick because it is an antifungal and a preservative. It’s widely used in other cosmetics too. Its purpose is to prevent fungal growth in the product generally to preserve it. This preservative is restricted in most of Europe because of the possible cancer risk. It can possibly also alter the endocrine system or be toxic in other ways. Alarmingly, methylparaben is often a “hidden” ingredient, which means that it is not shown on the ingredient list, making it almost impossible for consumers to be aware of the presence of this toxic ingredient.</div>
                    </div>
                </div>
                <div onClick={() => handleCollapse(7)} className="collapse-container">
                    <div className="collapse-title">
                        <h5>
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse7">Parabens</a>
                        </h5>
                        <div className="collapse-button"><span></span></div>
                    </div>
                    <div id="collapse7" className={!isCollapsed7 ? "collapse" : ""}>
                        <div className="collapse-text">Parabens are used as chemical preservatives in wide array of personal care products such as moisturizers, shampoos, foundations and many more. Over the past few years there has been a huge debate whether parabens are safe to use or not. Some say excessive amount of exposure to parabens may lead to breast cancer, but some argue that daily cosmetic exposure to parabens does not cause you any harm. Basically, everyone’s skin reacts differently depending on various chemicals and skin type. If you would like to take caution, you can definitely find many products without parabens.</div>
                    </div>
                </div>
                <div onClick={() => handleCollapse(8)} className="collapse-container">
                    <div className="collapse-title">
                        <h5>
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse8">PEG</a>
                        </h5>
                        <div className="collapse-button"><span></span></div>
                    </div>
                    <div id="collapse8" className={!isCollapsed8 ? "collapse" : ""}>
                        <div className="collapse-text">PEG (polyethylene glycols) compounds are widely used in cosmetics as thickeners and softeners. It also functions as absorption enhancer which allows both good and bad ingredients to be absorbed faster into deeper parts of skin. If used on broken or damaged skin, it can cause irritation and system toxicity. In addition, PEGs can reduce the skin’s moisture levels and speed up skin aging.</div>
                    </div>
                </div>
                <div onClick={() => handleCollapse(9)} className="collapse-container">
                    <div className="collapse-title">
                        <h5>
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse9">Petrolatum</a>
                        </h5>
                        <div className="collapse-button"><span></span></div>
                    </div>
                    <div id="collapse9" className={!isCollapsed9 ? "collapse" : ""}>
                        <div className="collapse-text">Petrolatum, or petroleum jelly, derived from petroleum, is often used in personal care products as a moisturizing agent. When properly refined, petrolatum has no known health concerns. However, petrolatum is often not fully refined in the US, which means it can be contaminated with toxic chemicals called polycyclic aromatic hydrocarbons. The National Toxicology Program (NTP) considers PAHs as a class to contain reasonably anticipated carcinogens; the International Agency for Research on Cancer (IARC) lists 14 PAHs as probable or possible carcinogens and one PAH as a known carcinogen.</div>
                    </div>
                </div>
                <div onClick={() => handleCollapse(10)} className="collapse-container">
                    <div className="collapse-title">
                        <h5>
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse10">Phenoxyethanol</a>
                        </h5>
                        <div className="collapse-button"><span></span></div>
                    </div>
                    <div id="collapse10" className={!isCollapsed10 ? "collapse" : ""}>
                        <div className="collapse-text">Used as an anti-bacterial in cosmetics and stabilizer in perfumes, phenoxyethanol is actually very harmful. It is harmful if swallowed, inhaled or absorbed through skin, especially to nursing mothers or infants. Phenoxyethanol can have an effect on the brain and the central nervous system. It irritates skin and eyes, and can cause blistering on skin as well. Although many skin care products (even some organic products as well) use phenoxyethanol in small amounts that is “not harmful” to skin, if you use the product multiple times a day, every day, it can cumulate and possibly affect you.</div>
                    </div>
                </div>
                <div onClick={() => handleCollapse(11)} className="collapse-container">
                    <div className="collapse-title">
                        <h5>
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse11">Phthalates</a>
                        </h5>
                        <div className="collapse-button"><span></span></div>
                    </div>
                    <div id="collapse11" className={!isCollapsed11 ? "collapse" : ""}>
                        <div className="collapse-text">Phthalates are used in cosmetics as lubricants (softeners). You can find these in products such as nail polish, moisturizers, shampoos, hair sprays, toys, detergents, and other variety of products. They are known to be endocrine disruptors that is linked to breast cancer and reproductive birth defects in males and females. Phthalates is also known to have some possible effects on hormones. Unfortunately, this is included in many "fragrances" so it is hard to detect in products.</div>
                    </div>
                </div>
                <div onClick={() => handleCollapse(12)} className="collapse-container">
                    <div className="collapse-title">
                        <h5>
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse12">Polyparaben</a>
                        </h5>
                        <div className="collapse-button"><span></span></div>
                    </div>
                    <div id="collapse12" className={!isCollapsed12 ? "collapse" : ""}>
                        <div className="collapse-text">Polyparaben is added as a preservative to lipsticks to prevent the growth of harmful bacteria and mould. It keeps the oily part of the lipstick from going rancid. This protects both the product and the consumers. There is evidence that it is an endocrine disruptor and that it is an allergen for some people. It does not seem to accumulate in the body and has been passed as safe for use in cosmetics provided that concentrations are restricted. However, the cosmetics database lists it as a “high risk” product.</div>
                    </div>
                </div>
                <div onClick={() => handleCollapse(13)} className="collapse-container">
                    <div className="collapse-title">
                        <h5>
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse13">Retinyl Palmitate</a>
                        </h5>
                        <div className="collapse-button"><span></span></div>
                    </div>
                    <div id="collapse13" className={!isCollapsed13 ? "collapse" : ""}>
                        <div className="collapse-text">Retinyl palmitate is added to lipsticks as an antioxidant. Retinyl palmitate is used as a synthetic preservative. It’s a synthetic form of vitamin A, and it has been shown that it may be harmful to pregnant women. The cosmetics database lists it as a “moderate hazard” because there is some evidence that links it to some cancers and reproductive problems. It is easily absorbed by the skin. Once absorbed, it turns first into retinol and then into retinoic acid.</div>
                    </div>
                </div>
                <div onClick={() => handleCollapse(14)} className="collapse-container">
                    <div className="collapse-title">
                        <h5>
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse14">Ethanolamines (MEA/DEA/TEA)</a>
                        </h5>
                        <div className="collapse-button"><span></span></div>
                    </div>
                    <div id="collapse14" className={!isCollapsed14 ? "collapse" : ""}>
                        <div className="collapse-text">Surfactants and pH adjuster linked to allergies, skin toxicity, hormone disruption, and inhibited fetal brain development. Found in: hair dyes, mascara, foundation, fragrances, sunscreens, dry cleaning solvents, paint, pharmaceuticals.</div>
                    </div>
                </div>
                <div onClick={() => handleCollapse(15)}  className="collapse-container">
                    <div className="collapse-title">
                        <h5>
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse15">Oxybenzone</a>
                        </h5>
                        <div className="collapse-button"><span></span></div>
                    </div>
                    <div id="collapse15" className={!isCollapsed15 ? "collapse" : ""}>
                        <div className="collapse-text">Sunscreen agent and ultraviolet light absorber linked to irritation, sensitization and allergies, and possible hormone disruption. Found in: sunscreen, moisturizer.</div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .title-image{
        width: 140px;
    }
    .collapse-title{
        background-color: white;
        border: 1px solid #b3b3b3;
        display: flex;
        justify-content: space-between;
    }
    a{
        color: black;
    }
    a:hover{
        text-decoration: none;
    }
    h5{
        padding-left: 1rem;
        margin-top: auto;
        margin-bottom: auto;
    }
    .collapse-button{
        background-color: var(--mainRed);
        width: 3rem;
        height: 100%;
        cursor: pointer;
    }
    span{
        display: inline-block;
        width: 1.4rem;
        height: 1.4rem;
        border-radius: 50%;
        border: 2px solid white;
        margin: 0.5rem 0.1rem 0rem 0.8rem;
    }
    .collapse-text{
        text-align: justify;
        font-size: 1.2rem;
    }
    @media only screen and (max-width: 539px) {
        .ButyBtn{
            height: 3rem;
        }
        .ButyBtn span{
            margin: 0.8rem 0.1rem 0rem 0.8rem;
        }
    }
    @media only screen and (max-width: 414px) {
        .ButyBtn{
            width: 4.2rem;
        }
    }
    @media only screen and (max-width: 375px) {
        .ButyBtn{
            width: 4.8rem;
        }
    }
    @media only screen and (max-width: 360px) {
        .ButyBtn{
            width: 5rem;
        }
    }
`

export default Avoid;