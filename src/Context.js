import React, {useState} from 'react'
import {storeProducts, detailProduct} from './Data';
const ProductContext = React.createContext();

function ProductProvider(props) {

    const [products, setProducts] = useState(storeProducts);
    const [detail, setDetail] = useState(detailProduct);

    // setProducts = () => {
    //     let tempProducts = [];
    //     storeProducts.forEach(item=>{
    //         const singleItem = {...item};
    //         tempProducts = [...tempProducts, singleItem];
    //     })
    //     this.setState(()=>{
    //         return { products: tempProducts};
    //     })
    // }

    // componentDidMount(){
    //     this.setProducts();
    // }
    //2h30
    
    const handleDetail = () =>{
        return <h1>fi</h1>
    };

    const test = function test(){
        return console.log("hola")
    }

    function addToCart(id){
       console.log("addToCart "+ id)
    };

    return (
        <ProductContext.Provider value={{products, detail, handleDetail, addToCart, test}}>
            {props.children}
        </ProductContext.Provider>
    )
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};