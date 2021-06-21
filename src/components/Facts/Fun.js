import React from 'react';
import Folder from '../../img/folder.svg';
import Pyramid from '../../img/pyramid.png';
import Balance from '../../img/balance.svg';
import Rings from '../../img/rings.svg';
import Expired from '../../img/expired.svg';
import Coliseo from '../../img/coliseo.svg';
import Scales from '../../img/scales.svg';
import Queen from '../../img/queen.svg';
import styled from 'styled-components';

function Fun() {
    window.scrollTo(0, 0);
    return (
        <Wrapper className="container">     
            <div className="text-center p-5">
                <img className="title-image" src={Folder} alt="folder"></img>
                <h4 className="title pt-4">LIPSTICK FUN FACTS</h4>
            </div>
            <div className="text-justify pb-4">
                <div className="bigDiv">
                    <img className="imgOut" src={Pyramid} alt="pyramid"></img>
                    <div className="redBorder">
                        <p>Although the term “lipstick” was not used until 1880, the use of lipstick dates back to Ancient Egypt. It is said that Cleopatra made her red lipstick from triton shells and crushed carmen ants.</p>
                        <p>Both men and women in Ancient Egypt wore lipstick as a symbol of their status. They applied it almost daily with wet sticks of wood and favored colors such as magenta, blue-black, and orange—though red was also a popular shade.</p>
                    </div>
                </div>     
                <div className="row verticalCenter">
                    <div className="col-sm-6">
                        <p>It is said that women who use lipstick daily involuntarily eat around four pounds of lipstick in their lifetime.</p>
                    </div>
                    <div className="col-sm-6 bgWhite center">
                        <img className="imgRow" src={Balance} alt="Balance"></img>
                    </div>
                </div>
                <div className="row verticalCenter">
                    <div className="col-sm-6 bgRed center">
                        <img className="imgRow" src={Rings} alt="rings"></img>
                    </div>
                    <div className="col-sm-6">
                        <p>In the 1700s, a man could nullify his marriage if his wife had used lip rouge during their courtship.</p>
                    </div>
                </div>
                <div className="row verticalCenter">
                    <div className="col-sm-6">
                        <p>LipsticLipsticks have expiration date and can become rancid. Storing them in fridges can prolong their life.</p>
                    </div>
                    <div className="col-sm-6 bgWhite center">
                        <img className="imgRow" src={Expired} alt="Expired"></img>
                    </div>
                </div>
                <div className="bigDiv2">
                    <img className="imgOut coliseo" src={Coliseo} alt="Coliseo"></img>
                    <div className="redBorder2">
                        <p>If you were a wealthy woman in Ancient Rome, chances are you had your own professional team of hairstylists and makeup artists, called cosmatae, to apply your lipstick every day. </p>
                        <p>But, unfortunately, many early iterations of lipstick contained toxic ingredients like white lead, fucus, and vermillion.</p>
                    </div>
                </div>
                <div className="row verticalCenter">
                    <div className="col-sm-6">
                        <p>Animal fat, sheep sweat, and ox marrow were also often used to make lip rouge. An ingredient that has stayed the same through the years is Fish scales, which are still used in lipsticks today to boost shine.</p>
                    </div>
                    <div className="col-sm-6 bgWhite center">
                        <img className="imgRow" src={Scales} alt="Scales"></img>
                    </div>
                </div>
                <div className="row verticalCenter">
                    <div className="col-sm-6 bgRed center">
                        <img className="imgRow" src={Queen} alt="queen"></img>
                    </div>
                    <div className="col-sm-6">
                        <p>In England in the 1500s, people believed that lipstick actually had magical powers. Queen Elizabeth was reportedly a huge believer in the healing powers of lipstick and applied the cosmetic heavily when she fell ill. She was said to have had half an inch of lipstick on her lips at the time of her death</p>
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
    .bigDiv{
      position: relative;
      padding-left: 8.4rem;
      margin: 1rem;
    }
    .bigDiv2{
      position: relative;  
      padding-left: 9rem;
      margin: 1rem;
    }
    .imgOut{
        position: absolute;
        top: 0px;
        left: 0px;
        background-color: var(--mainRed);
    }
    .redBorder{
        border: 2px solid var(--mainRed);
        padding: 1rem 1rem 1rem 9rem;
        margin-left: -1rem; 
    }
    .redBorder2{
        border: 2px solid var(--mainRed);
        padding: 1rem 1rem 3rem 9rem;
        margin-left: -1rem; 
    }
    .imgRow{
        height: 220px;
    }
    .coliseo{
        width: 250px;
    }
    p{
        font-size: 1.3rem;
    }
    .bgWhite{
        background-color: white;
    }
    .bgRed{
        background-color: var(--mainRed);
    }
    .center{
        text-align: center;
    }
    .verticalCenter{
        align-items: center;
    }
    @media only screen and (max-width: 991px) {
        p{
            font-size: 1.1rem;
        }
        .redBorder2{
            padding: 1rem 1rem 1rem 9rem;
        }
    }
    @media only screen and (max-width: 767px) {
        .bigDiv, .bigDiv2{
            padding-left: 3.3rem;
        }
        .imgRow{
            height: 200px;
        }
        .imgOut{
            height: auto;
            width: 5rem;
        }
        .redBorder, .redBorder2{
            padding: 1rem 1rem 1rem 3rem;
        }
    }
    @media only screen and (max-width: 575px) {
        .imgRow{
            height: 7rem;
        }
    }
`

export default Fun;