import React from 'react'
import styled from 'styled-components';

function CartColumns() {
    
    return (
        <Wrapper className="container text-center mt-4 mt-sm-5">
            <div className="row">
                <div className="col-10 mx-auto mt-2 text-center text-title">
                    <h1 className="font-weight-bold">
                        <strong className="text-blue" >CART</strong>
                    </h1>
                </div>
            </div>
        </Wrapper>
    )    
}

const Wrapper = styled.div`
    border: 2px solid white;
`

export default CartColumns;