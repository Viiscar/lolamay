import React from 'react';
import Product from "./Product";
import Title from './Title';
import {ProductConsumer} from "../Context";
function Productlist() {
    return (
        <div>
            <h3>
                <>
                    <div className="py-5">
                        <div className="container">
                            <Title name="our" title="products"/>
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