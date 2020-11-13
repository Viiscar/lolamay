import React from 'react'
import styled from 'styled-components';
import {ProductConsumer} from '../Context';
import {ButtonContainer} from './Button';
import {Link} from "react-router-dom";

function Modal() {
    
    return (
        <ProductConsumer>
            {(value)=>{
                const {modal, closeModal} = value;
                const {id, img, title,price} = value.modalProduct;
                
                if(!modal){
                    return null;
                }else{
                    return(
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center p-5">
                                        <h5>{typeof id === 'number' ? "Item added to the Cart" : title}</h5>
                                        <img src={img} className="img-fluid" alt={title}></img>
                                        <h5>{typeof id === 'number' ? title : ""}</h5>
                                        <h5 className="text-muted">{typeof id === 'number' ? "price: $ " + price : ""}</h5>
                                        <Link to="/" style={id === false ? {display: "none"}:{}}>
                                            <ButtonContainer onClick={closeModal}>
                                             Store
                                            </ButtonContainer>
                                        </Link>
                                      
                                        <Link to="/cart" style={id === true ? {display: "none"}:{}}>
                                            <ButtonContainer cart onClick={closeModal}>
                                             Go to Cart
                                            </ButtonContainer>
                                        </Link>

                                        {/* { id === true ? 
                                            <Link to="/" >
                                                <ButtonContainer onClick={closeModal}>
                                                Store
                                                </ButtonContainer>
                                            </Link>
                                            :
                                            <Link to="/cart" >
                                                <ButtonContainer cart onClick={closeModal}>
                                                Go to Cart
                                                </ButtonContainer>
                                            </Link>
                                        } */}
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                    )   
                }
            }}
        </ProductConsumer>
    )
}

export default Modal;

const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display: flex;
align-items: center;
justify-content:center;
#modal{
    background:var(--mainWhite);
}
`;