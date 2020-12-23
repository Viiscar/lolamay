import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import folder from '../../img/folder.jpg'
import lipsticks from '../../img/lipsticks.jpg'
import leaf from '../../img/leaf.jpg'
import toxic from '../../img/toxic.jpg'

function Facts() {
    return (
        <Container className="container text-justify d-lg-block">
            <div className= "row">
                <div className="mx-auto col-lg-6 col-sm-12 my-3">
                    <div className="title">
                        <img src={lipsticks} alt={"lipstick"}></img>
                        <h4 className="text-left">WHY SAFE LIPSTICK MATTERS</h4>
                    </div>
                    <p>Lips are sensitive and absorptive, which means that they
                    deserve special consideration because they’re close to the
                    mouth. Lips are covered by a layer of skin that is much thinner
                    than the skin that covers the rest of the face. It has
                    underneath a sensitive mucous membrane.</p>
                    <Link to="/about/safe-lipstick">
                        <button>Read more &gt;</button>
                    </Link>
                </div>
                <div className="mx-auto col-lg-6 col-sm-12 my-3">
                    <div className="title">
                        <img src={toxic} alt={"toxic"}></img>
                        <h4>INGREDIENTS TO AVOID</h4>
                    </div>
                    <p>If you want to avoid ingesting harmful chemicas, this is the list
                    you need to read. Here are the top ingredients to avoid when
                    it comes to your makeup.</p>
                    <Link to="/about/ingredients-to-avoid">
                        <button className="avoid-btn">Read more &gt;</button>
                    </Link>
                </div>
            </div>
            <div className= "row">
                <div className="mx-auto col-lg-6 col-sm-12 my-3">
                    <div className="title">
                        <img src={leaf} alt={"leaf"}></img>
                        <h4>NON-TOXIC LIPSTICK</h4>
                    </div>
                    <p>Among the good components, here you’ll see non-toxic lipstick
                    ingredients that you won't be afraid to ingest, since they are
                    safe to your skin.</p>
                    <Link to="/about/non-toxic-lipstick">
                        <button>Read more &gt;</button>
                    </Link>
                </div>
                <div className="mx-auto col-lg-6 col-sm-12 my-3">
                    <div className="title">
                        <img src={folder} alt={"folder"}></img>
                        <h4>FUN FACTS</h4>
                    </div>
                    <p>Here a list of fun facts about lipsticks.</p>
                    <Link to="/about/fun-facts">
                        <button className="fun-btn" >Read more &gt;</button>
                    </Link>
                </div>
            </div>   
        </Container>
    )
}

const Container = styled.div`
    .title{
        display: flex;
        align-items: center;
        padding: 1.5rem 1.5rem 1.5rem 0rem;
        img{
            padding-right: 0.8rem;
        }
    }
    button{
        border: 1px solid black;
        color: black;
    }
    .avoid-btn{
        margin-top: 2.9rem;
    }
    .fun-btn{
        margin-top: 1.5rem;
    }
    @media only screen and (max-width: 991px) {
        .avoid-btn{
        margin-top: auto;
        }
        .fun-btn{
            margin-top: auto;
        }
    }

`
export default Facts;
