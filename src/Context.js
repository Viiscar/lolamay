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
    const retreivedStorage = localStorage.getItem('myCart');
    const parsedStorage = JSON.parse(retreivedStorage);
    console.log("storage");
    console.log(parsedStorage);
    console.log("cart");
    console.log(cart);
    
    const finalCart= typeof(Storage) !== "undefined" ? parsedStorage : cart;
    
    // let cartData;
    // if (typeof(Storage) !== "undefined") {
    //     let retreivedStorage = localStorage.getItem('myCart');
    //     cartData = JSON.parse(retreivedStorage); 
    // } else {
    //     let {cart} = cartData;
    // }


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
        settingProducts();
    },[]);

    function settingProducts() {
        let tempProducts = [];
        storeProducts.forEach(item=>{
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        })

        setProducts(tempProducts);
    }

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
       product.quantity = 1;
       const price = product.price;
       product.total = price;
       setProducts(tempProducts);
       //faire un push de product
       let tempCart = cart;
       tempCart.push(product);
       setCart([...tempCart]);
       localStorage.setItem("myCart", JSON.stringify([...tempCart]));
       let retreivedStorage = localStorage.getItem('myCart');
       console.log("storage",JSON.parse(retreivedStorage));
       addTotal();
    };

    function openModal(id) {
        const product = getItem(id);
        setModal(true);
        setModalProduct(product);

    }

    function closeModal(){
        setModal(false);
    }

    //faire une fonction increment/decrement
    function increment(id){
        let tempCart= typeof(Storage) !== "undefined" ? [...parsedStorage] : [...cart];
        
        // let tempCart = [...cart];
        const selectedProduct = tempCart.find(item=>item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.quantity = product.quantity + 1;
        product.total = product.quantity * product.price;
        setCart([...tempCart]);
        console.log(tempCart);
        //dans une callback
        addTotal();
    }

    function decrement(id){
        let tempCart= typeof(Storage) !== "undefined" ? [...parsedStorage] : [...cart];

        //let tempCart = [...cart];
        const selectedProduct = tempCart.find(item=>item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.quantity = product.quantity - 1;;

        if(product.quantity === 0){
            removeItem(id);
        }else{
            product.total = product.quantity * product.price;
            setCart([...tempCart]);
            addTotal();
        }
    }

    function removeItem(id){

        let tempCart= typeof(Storage) !== "undefined" ? [...parsedStorage] : [...cart];

        let tempProducts = [...products];
        // let tempCart = [...cart];
        tempCart = tempCart.filter(item => item.id !== id);
        console.log("tempcart ", tempCart);
        const index = tempProducts.indexOf(getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.quantity = 0;
        removedProduct.total= 0;
        setCart([...tempCart]);
        setProducts([...tempProducts]);
        addTotal();
    }

    function clearCart(){
        //ca rend le truc "null"
        localStorage.removeItem('myCart');
        setCart([]);
        settingProducts();
        //dans une callback
        addTotal();
    }

    function addTotal(){
        let subTotal=0;
        cart.map(item=>(subTotal += item.total));
        const tempTax = subTotal * 0.2;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        setCartSubtotal(subTotal);
        setCartTax(tax);
        setCartTotal(total);
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
            finalCart, 
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