import React, {useState, useEffect} from 'react'
import {storeProducts, detailProduct} from './Data';
const ProductContext = React.createContext();

function ProductProvider(props) {
    //state
    const [products, setProducts] = useState([]);
    const [detail, setDetail] = useState(detailProduct);
    const [cart, setCart] = useState([]);
    const [modal, setModal] = useState(false);
    const [modalProduct, setModalProduct] = useState(detailProduct);
    const [cartSubtotal, setCartSubtotal] = useState(0);
    const [cartTax, setCartTax] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);


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


    function addToCart(id){
       let tempProducts = [...products];
       const index = tempProducts.indexOf(getItem(id));
       const product = tempProducts[index];
       product.inCart = true;
       product.count = 1;
       const price = product.price;
       product.total = price;
       setProducts(tempProducts);
       //faire un push de product
       let tempCart = cart;
       tempCart.push(product);
       setCart([...tempCart]);
       //console.log(cart)
    };

    function openModal(id) {
        const product = getItem(id);
        setModal(true);
        setModalProduct(product);

    }

    function closeModal(){
        setModal(false);
    }

    function increment(id){
        console.log("increment")
    }

    function decrement(id){
        console.log("decrement")
    }

    function removeItem(id){
        console.log("remove")
    }

    function clearCart(){
        console.log("clear")
    }

    return (
        <ProductContext.Provider value={{
            products, 
            detail, 
            handleDetail, 
            addToCart, 
            modalProduct, 
            modal, 
            closeModal, 
            openModal, 
            cartSubtotal,
            cart, 
            cartTax, 
            cartTotal,
            increment,
            decrement,
            removeItem,
            clearCart
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};