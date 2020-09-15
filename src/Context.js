import React, {useState, useEffect} from 'react'
import {storeProducts, detailProduct} from './Data';
const ProductContext = React.createContext();

function ProductProvider(props) {
    //state
    const [products, setProducts] = useState([]);
    const [detail, setDetail] = useState(detailProduct);
    const [cart, setCart] = useState([]);

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

    useEffect(() =>{
        function settingProducts() {
            let tempProducts = [];
            storeProducts.forEach(item=>{
                const singleItem = {...item};
                tempProducts = [...tempProducts, singleItem];
            })
    
            setProducts(tempProducts);
        }

        settingProducts();
    },[]);


    function getItem(id) {
        const product = products.find(item => item.id === id);
        return product;
    }

    
    function handleDetail(id) {
        const product = getItem(id);
        setDetail(product);
    };

    const test = function test(){
        return console.log("hola")
    }

    function addToCart(id){
       //console.log("addToCart "+ id);
       let tempProducts = [...products];
       const index = tempProducts.indexOf(getItem(id));
       const product = tempProducts[index];
       product.inCart = true;
       product.count = 1;
       const price = product.price;
       product.total = price;
       setProducts(tempProducts);
       setCart([...cart]);
    };

    return (
        <ProductContext.Provider value={{products, detail, handleDetail, addToCart, test}}>
            {props.children}
        </ProductContext.Provider>
    )
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};