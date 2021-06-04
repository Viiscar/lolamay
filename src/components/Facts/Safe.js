import React from 'react'
import Lipsticks from '../../img/lipsticks.svg';
import Lead from '../../img/lead.png';
import styled from 'styled-components';

function Safe() {
    return (
        <Wrapper className="container">     
            <div className="text-center p-5">
                <img className="title-image" src={Lipsticks} alt="leaf"></img>
                <h4 className="title pt-4">WHY SAFE LIPSTICK MATTERS</h4>
            </div>
            <div className="text-justify">
                <p className="drop-caps">Lips are sensitive and absorptive, which means that they deserve special consideration because they’re close to the mouth. Lips are covered by a layer of skin that is much thinner than the skin that covers the rest of the face. It has underneath a sensitive mucous membrane. Lip skin also lacks hair and sweat glands, which means that our lips do not have the same natural defenses provided by other types of skin.</p>
                <p>The majority of what you apply on your lips ends up being ingested, so you wouldn't like to wear lipstick that contains any ingredients that you wouldn’t want to eat (in small quantities, at least).</p>
            </div>       
            <div className="text-center p-5">
                <img src={Lead} alt="lead"></img>
                <h4 className="title pt-4 bold-font">WHAT IS DOING LEAD IN LIPSTICKS?</h4>
            </div>
            <div className="text-justify pb-4">
                <p className="drop-caps">Every day millions of women apply lipstick without a second thought. What many do not know is that lipsticks may contain lead, the notorious metal that can cause learning, language and behavioral problems. Lead is a neurotoxin and can be dangerous even at small doses.</p>
                <p>In 2007, the Campaign for Safe Cosmetics set off a media storm when they reported that they detected lead in about two thirds of the 66 lipstick products they tested. Eventually the FDA followed up with its own studies. The FDA found lead in more lipstick and other cosmetic products, often at levels higher than those originally discovered.</p>
                <p>Lead and other “heavy metals” (such as chromium, cadmium, aluminum, and arsenic) are naturally occurring in the environment, including in the materials used to derive earth-based cosmetic pigments. Also the human use of metals has caused higher levels of contamination in the environment, including sources for cosmetic ingredients. This is why we have heavy metal pollution in our air water and food supply.</p>
                <p>Although it’s widely recognized that there is no such thing as a “safe” level of lead in the body, the FDA’s position is that cosmetic manufacturers can limit the levels of lead in their products so that they don’t pose a health threat. The Campaign for Safe Cosmetics and others argue that lead exposure is problematic at all levels because lead accumulates in the body over time, and the effects can be very serious for adults and children alike.</p>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .bold-font{
        font-family: BookBldFLF;
    }
    .drop-caps::first-letter{
        /* initial-letter: 4;
        -webkit-initial-letter: 4; */
        float: left;
        font-size: 6rem;
        line-height: 60px;
        padding-top: 10px;
        padding-right: 0px;
        padding-left: 0px;
    }
    p{
        font-size: 1.3rem;
    }
    .title-image{
        width: 140px;
    }
`

export default Safe;