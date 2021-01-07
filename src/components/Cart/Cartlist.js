import React from 'react';
import {ProductConsumer} from "../../Context";
import CartItem from './Cartitem';
import styled from 'styled-components';

function CartList() {

    return (
        <ProductConsumer>
            {value => {
                const {cart} = value;

                return(
                    <Wrapper  className="container">
                        <div className= "row text-center">
                            <div className="col-10 mx-auto col-lg-2">
                            </div>
                            <div className="col-10 mx-auto col-lg-2">
                            </div>
                            <div className="col-10 mx-auto col-lg-2">
                            </div>
                            <div className="col-10 mx-auto col-lg-2">
                            </div>
                            <div className="col-10 mx-auto col-lg-2">
                            </div>
                            <div className="col-10 mx-auto col-lg-2 pt-1">
                                <strong>ITEM TOTAL</strong>
                            </div>
                        </div>   
                        <div>
                            {cart.map(item=>{
                                return <CartItem key={item.id} item={item} cartData={value} />
                            })}
                        </div>
                    </Wrapper>
                )  
            }}

        </ProductConsumer>
    )
}

const Wrapper = styled.div`
    border: 2px solid white;
    border-top: 1px;
`

export default CartList;