import React, {useState} from 'react';
//import Product from "./Product";
import Title from './Title';
import {storeProducts} from '../Data'
function Productlist() {
    //state
    const [product, setProduct] = useState([storeProducts]);
    
    return (
        <div>
            <h3>
                <>
                    <div className="py-5">
                        <div className="container">
                            <Title name="our" title="products"/>
                            <div className="row">

                            </div>
                        </div>
                    </div>
                </>
                {/* <Product /> */}
            </h3>
        </div>
    )
}

export default Productlist;