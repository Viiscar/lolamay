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
                const {id, id2, img, title,price} = value.modalProduct;
                if(!modal){
                    return null;
                }else{
                    return(
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center">
                                        <h5 className="boldFont">{typeof id === 'number' ? "Item added to Cart" : title}</h5>
                                        <div className="bgWhite">
                                            <img src={img} className={typeof id === 'number' ? "img-fluid" : "img-fluid main-img"} alt={title}></img>
                                            <h5 className="text-muted"><span className="productName pb-2">{typeof id === 'number' ? title : ""}</span></h5>
                                            <h5 className="text-muted pt-2">{typeof id === 'number' ? "$" + price + ".00" : ""}</h5>
                                        </div>
                                        <div className="justify-content-between">
                                        <Link to="/shop" style={id2 === false ? {display: "none"}:{}}>
                                            <ButtonContainer onClick={closeModal}>
                                             Keep Shopping
                                            </ButtonContainer>
                                        </Link>
                                      
                                        <Link to="/cart" style={id === true ? {display: "none"}:{}}>
                                            <ButtonContainer cart onClick={closeModal}>
                                             Go to Cart
                                            </ButtonContainer>
                                        </Link>
                                        </div>
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
    background: var(--mainGrey);
}
.boldFont{
    font-family: BookBldFLF;
}
.productName{
    border-bottom: 1px solid #D8DBDD;
}
.bgWhite{
    background:var(--mainWhite);
}
.main-img{
    width: 200px;
}
`;