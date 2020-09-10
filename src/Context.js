import React, {useState} from 'react'
import {storeProducts, detailProduct} from './Data';
const ProductContext = React.createContext();

function ProductProvider(props) {

    const [products, setProducts] = useState(storeProducts);
    const [detail, setDetail] = useState(detailProduct);
    
    const handleDetail = () =>{
        return console.log("detail")
    };

    const test = function test(){
        return console.log("hola")
    }

    const addToCart = () =>{
        console.log("addToCart")
    };

    return (
        <ProductContext.Provider value={{products, detail, handleDetail, addToCart, test}}>
            {props.children}
        </ProductContext.Provider>
    )
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};