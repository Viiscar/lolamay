import React from 'react';
import Folder from '../../img/folder.jpg';
import styled from 'styled-components';

function Fun() {
    return (
        <Wrapper className="container">     
            <div className="text-center p-5">
                <img src={Folder} alt="folder"></img>
                <h4 className="title pt-4">LIPSTICK FUN FACTS</h4>
            </div>
            <div className="text-justify">
                <p><span></span>Although the term “lipstick” was not used until 1880, the use of lipstick dates back to Ancient Egypt.It is said that Cleopatra made her red lipstick from triton shells and crushed carmen ants.</p>
                <p><span></span>It is not considered acceptable to apply lipstick in public, especially at the dinner table in a fancy restaurant.</p>
                <p><span></span>Both men and women in Ancient Egypt wore lipstick as a symbol of their status. They applied it almost daily with wet sticks of wood and favored colors such as magenta, blue-black, and orange—though red was also a popular shade.</p>
                <p><span></span>It is said that women who use lipstick daily involuntarily eat around four pounds of lipstick in their lifetime.</p>
                <p><span></span>In the 1700s, a man could nullify his marriage if his wife had used lip rouge during their courtship.</p>
                <p><span></span>Lipsticks have expiration date and can become rancid. Storing them in fridges can prolong their life.</p>
                <p><span></span>If you were a wealthy woman in Ancient Rome, chances are you had your own professional team of hairstylists and makeup artists, called cosmatae, to apply your lipstick every day. But, unfortunately, many early iterations of lipstick contained toxic ingredients like white lead, fucus, and vermillion.</p>
                <p><span></span>Animal fat, sheep sweat, and ox marrow were also often used to make lip rouge. An ingredient that has stayed the same through the years is Fish scales, which are still used in lipsticks today to boost shine.</p>
                <p><span></span>In England in the 1500s, people believed that lipstick actually had magical powers. Queen Elizabeth was reportedly a huge believer in the healing powers of lipstick and applied the cosmetic heavily when she fell ill. She was said to have had half an inch of lipstick on her lips at the time of her death</p>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    span{
        display: inline-block;
        width: 0.9rem;
        height: 0.9rem;
        border-radius: 50%;
        border: 2px solid var(--mainRed);
        margin-right: 0.5rem;
        line-height: 0px;
    }
`

export default Fun;