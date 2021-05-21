import React from 'react';
import styled from 'styled-components';

function CartItem({item, cartData}) {

    const {id, title, img, price, total, quantity, color} = item;
    const {increment, decrement, removeItem} =cartData;

    return (
        <> 
            <Wrapper className="row my-2 text-center">
                <div className="col-10 mx-auto col-lg-2">
                    <img src={img} style={{width:'5rem', height:'5rem'}} className="img-fluid" alt={title}/>
                </div>
                <div className="col-10 mx-auto col-lg-3">
                    <span className="d-lg-none">Product: </span> {title + " " + color}
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">Price: </span> ${price.toFixed(2)}
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="d-flex justify-content-center">
                        <div>
                            <span className="btn btn-red mx-1" onClick={()=>decrement(id)}>-</span>
                            <span className="btn btn-black mx-1">{quantity}</span>
                            <span className="btn btn-red mx-1" onClick={()=>increment(id)}>+</span>
                        </div>
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-1">
                    <div className="cart-icon" onClick={()=>removeItem(id)}>
                        <i className="fas fa-trash"></i>
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <strong>${total.toFixed(2)}</strong>
                </div>
            </Wrapper>
        </>

    )
}

const Wrapper = styled.div`
    .cart-icon{
        cursor:pointer;
        font-size:1.2rem;
        color: var(--mainRed);
    }
    .btn-black{
    background: transparent;
    font-size: 1rem !important;
    padding: .2rem .75rem;
    line-height: 1.25;
    color: var(--mainDark);
    border-radius:0 !important;
    border: 0.1rem var(--mainDark) solid !important;
    }
    .btn-black:hover{
        background: var(--mainDark) !important;
        color: var(--mainWhite) !important;
    }
    .btn-red{
        background: transparent;
        font-size: 2rem !important;
        padding: 0rem .55rem;
        line-height: 0.8;
        color: var(--mainBlack);
        border-radius:0 !important;
        border: 0.1rem var(--mainRed) solid !important;
    }
    .btn-red:hover{
        background: var(--mainRed) !important;
        color: var(--mainWhite) !important;
    }
`

export default CartItem;