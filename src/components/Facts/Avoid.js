import React, { useState } from 'react';
import Toxic from '../../img/toxic.jpg';
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
  
    function handleCollapse(number){ 
        switch(number) {
            case 1:
                setisCollapsed1(!isCollapsed1);
                break;
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
        }
    }
    return (
        <Wrapper className="container">     
            <div className="text-center p-5">
                <img src={Toxic} alt="toxic"></img>
                <h4 className="title pt-4">LIPSTICK INGREDIENTS TO AVOID</h4>
            </div>
            <div>
                <div className="collapse-container">
                    <div className="collapse-title">
                        <h4>
                        <a onClick={() => handleCollapse(1)} data-toggle="collapse" data-parent="#accordion" href="#collapse1">Benzalkonium Chloride</a>
                        </h4>
                    </div>
                    <div id="collapse1" className={!isCollapsed1 ? "collapse" : ""}>
                        <div className="collapse-text">A disinfectant used as a preservative and surfactant associated with severe skin, eye, and respiratory irritation and allergies. Found in: sunscreens, moisturizers.</div>
                    </div>
                </div>
                <div className="collapse-container">
                    <div className="collapse-title">
                        <h4>
                        <a onClick={() => handleCollapse(2)} data-toggle="collapse" data-parent="#accordion" href="#collapse2">Butylatedhydroxy Anisole and Butylated Hydroxytoluene</a>
                        </h4>
                    </div>
                    <div id="collapse2" className={!isCollapsed2 ? "collapse" : ""}>
                        <div className="collapse-text">Synthetic antioxidants used to extend shelf life. They are likely carcinogens and hormone disruptors and may cause liver damage. Found in: lipsticks, moisturizers, diaper creams, and other cosmetics.</div>
                    </div>
                </div>
                <div className="collapse-container">
                    <div className="collapse-title">
                        <h4>
                        <a onClick={() => handleCollapse(3)} data-toggle="collapse" data-parent="#accordion" href="#collapse3">Methylparaben</a>
                        </h4>
                    </div>
                    <div id="collapse3" className={!isCollapsed3 ? "collapse" : ""}>
                        <div className="collapse-text">Methylparaben is added to lipstick because it is an antifungal and a preservative. It’s widely used in other cosmetics too. Its purpose is to prevent fungal growth in the product generally to preserve it. This preservative is restricted in most of Europe because of the possible cancer risk. It can possibly also alter the endocrine system or be toxic in other ways. Alarmingly, methylparaben is often a “hidden” ingredient, which means that it is not shown on the ingredient list, making it almost impossible for consumers to be aware of the presence of this toxic ingredient.</div>
                    </div>
                </div>
                <div className="collapse-container">
                    <div className="collapse-title">
                        <h4>
                        <a onClick={() => handleCollapse(4)} data-toggle="collapse" data-parent="#accordion" href="#collapse4">Polyparaben</a>
                        </h4>
                    </div>
                    <div id="collapse4" className={!isCollapsed4 ? "collapse" : ""}>
                        <div className="collapse-text">Polyparaben is added as a preservative to lipsticks to prevent the growth of harmful bacteria and mould. It keeps the oily part of the lipstick from going rancid. This protects both the product and the consumers. There is evidence that it is an endocrine disruptor and that it is an allergen for some people. It does not seem to accumulate in the body and has been passed as safe for use in cosmetics provided that concentrations are restricted. However, the cosmetics database lists it as a “high risk” product.</div>
                    </div>
                </div>
                <div className="collapse-container">
                    <div className="collapse-title">
                        <h4>
                        <a onClick={() => handleCollapse(5)} data-toggle="collapse" data-parent="#accordion" href="#collapse5">Retinyl Palmitate</a>
                        </h4>
                    </div>
                    <div id="collapse5" className={!isCollapsed5 ? "collapse" : ""}>
                        <div className="collapse-text">Retinyl palmitate is added to lipsticks as an antioxidant. Retinyl palmitate is used as a synthetic preservative. It’s a synthetic form of vitamin A, and it has been shown that it may be harmful to pregnant women. The cosmetics database lists it as a “moderate hazard” because there is some evidence that links it to some cancers and reproductive problems. It is easily absorbed by the skin. Once absorbed, it turns first into retinol and then into retinoic acid.</div>
                    </div>
                </div>
                <div className="collapse-container">
                    <div className="collapse-title">
                        <h4>
                        <a onClick={() => handleCollapse(6)} data-toggle="collapse" data-parent="#accordion" href="#collapse6">Ethanolamines (MEA/DEA/TEA)</a>
                        </h4>
                    </div>
                    <div id="collapse6" className={!isCollapsed6 ? "collapse" : ""}>
                        <div className="collapse-text">Surfactants and pH adjuster linked to allergies, skin toxicity, hormone disruption, and inhibited fetal brain development. Found in: hair dyes, mascara, foundation, fragrances, sunscreens, dry cleaning solvents, paint, pharmaceuticals.</div>
                    </div>
                </div>
                <div className="collapse-container">
                    <div className="collapse-title">
                        <h4>
                        <a onClick={() => handleCollapse(7)} data-toggle="collapse" data-parent="#accordion" href="#collapse7">Oxybenzone</a>
                        </h4>
                    </div>
                    <div id="collapse7" className={!isCollapsed7 ? "collapse" : ""}>
                        <div className="collapse-text">Sunscreen agent and ultraviolet light absorber linked to irritation, sensitization and allergies, and possible hormone disruption. Found in: sunscreen, moisturizer.</div>
                    </div>
                </div>
                                <div className="collapse-container">
                    <div className="collapse-title">
                        <h4>
                        <a onClick={() => handleCollapse(8)} data-toggle="collapse" data-parent="#accordion" href="#collapse8">Synthetic flavor or fragrance</a>
                        </h4>
                    </div>
                    <div id="collapse8" className={!isCollapsed8 ? "collapse" : ""}>
                        <div className="collapse-text">An engineered scent or flavoring agent that may contain any combination of 3,000-plus stock chemical ingredients, including hormone disruptors and allergens. Fragrance formulas are protected under federal law’s classification of trade secrets and therefore can remain undisclosed. Found in: all types of cosmetics.</div>
                    </div>
                </div>
            </div>
            <p>Among many more!</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .collapse-title{
        background-color: white;
        text-align: center;
    }
    a{
        color: black;
    }
    a:hover{
        text-decoration: none;
    }
`

export default Avoid;