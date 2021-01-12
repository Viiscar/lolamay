import React from 'react';
import Product from "./Product";
import {ProductConsumer} from "../Context";

function Productlist() {
    return (
        <div>
            <h3>
                <>
                    <div className="py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-10 mx-auto my-2 text-center text-title">
                                    <h4 className="font-weight-bold">
                                        CREAMY LURE LIPSTICKS
                                    </h4>
                                </div>
                            </div>
                            <div className="row">
                                <ProductConsumer>
                                    {value => {
                                        //console.log(value.products[0]);
                                        //return value.handleDetail
                                        
                                        return value.products.map(product => {
                                            return <Product key={product.id} product={product} />
                                        })
                                    }}
                                </ProductConsumer>
                            </div>
                        </div>
                    </div>
                </>
            </h3>
        </div>
    )
}

export default Productlist;