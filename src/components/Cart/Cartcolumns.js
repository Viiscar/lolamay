import React from 'react'
import styled from 'styled-components';

function CartColumns() {
    
    return (
        <Wrapper className="container text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto my-2 text-center text-title">
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