import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context';
import PropTypes from 'prop-types';

function Product (props) { 

    const {id, title, img, price, inCart} = props.product;
    return (
        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            <div className="card">
                <ProductConsumer>
                    {(value) => ( 
                    
                    <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top"/>
                        </Link>
                        <button 
                            className="cart-btn" 
                            disabled={inCart ? true : false} 
                            onClick={()=> {value.addToCart(id); value.openModal(id);}}
                        >
                            {inCart ? (<p className="mb-0" disabled>{" "}In Cart</p>):(<i className="fab fa-opencart"/>)}
                        </button>
                    </div>
                    )}
                    
                </ProductConsumer>
                <div className="card-footer d-flex justify-content-between">
                    <div className="title">
                       {title}
                    </div>
                    <div className="price">                        
                        ${price.toFixed(2)}                        
                    </div> 
                </div>
                
            </div>
        </ProductWrapper> 
    )
}

Product.propTypes={
    product:PropTypes.shape({
        id:PropTypes.number,
        title:PropTypes.string,
        img:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
};

const ProductWrapper = styled.div`
    .price{
        background-color: black;
        color: var(--mainWhite);
        padding: 0.2rem 1rem 0rem 1rem;
        font-size: 1.5rem;
    }
    .title{
        font-size: 1.2rem;
        padding-left: 0.5rem;
        padding-top: 0.3rem;
    }
    .card{
        border-color: transparent;
        transition: all 1s linear;
    }
    .card-footer{
        border: 2px solid var(--mainWhite);
        background: var(--mainGrey);
        transition: all 1s linear;
        padding: 0px;
    }
    &:hover{
        .card{
            border:0.04rem solid rgba(0,0,0,0.2);
            box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
        }
    }
    .img-container{
        position:relative;
        overflow:hidden;
    }
    .card-img-top{
        transition: all 1s linear;
    }
    .img-container:hover .card-img-top{
        transform: scale(1.2);
    }
    .cart-btn{
        position: absolute;
        bottom:0;
        right:0;
        padding:0.2rem 0.4rem;
        background: var(--mainRed);
        border:none;
        color: var(--mainWhite);
        font-size:1.4rem;
        border-radius: 0.5rem 0 0 0;
        transform:translate(100%,100%);
        transition: all 0.5s linear;
    }
    .img-container:hover .cart-btn{
        transform:translate(0,0);
    }
    .cart-btn:hover{
        cursor: pointer;
    }
`
export default Product;