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

    useEffect(() =>{
        settingProducts();
    },[]);

    //addTotal callback for setCart
    useEffect(() => {
        if (cart !== []) {
         addTotal();
        } 
    }, [cart]);

    function settingProducts() {
        let tempProducts = [];
        storeProducts.forEach(item=>{
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        })

        if (typeof(Storage) !== "undefined") {
            console.log("storage exist")
            // si le storage a été cleared
            if(localStorage.length === 0){
                console.log("storage is empty")
                localStorage.setItem("products", JSON.stringify(tempProducts));
                localStorage.setItem("myCart", JSON.stringify([]));
                setProducts(tempProducts);
            }else{
                console.log("storage is full")
                console.log(localStorage); //que products
                const cartStorage = localStorage.getItem('myCart');
                const parsedCartStorage = JSON.parse(cartStorage);
                const productsStorage = localStorage.getItem('products');
                const parsedproductsStorage = JSON.parse(productsStorage);
                setCart(parsedCartStorage);
                setProducts(parsedproductsStorage);
            }
        }else{
            console.log("storage does'nt exist")
            setProducts(tempProducts);
        } 
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
       localStorage.setItem("products", JSON.stringify(tempProducts));
       //faire un push de product
       let tempCart = cart;
       tempCart.push(product);
       setCart([...tempCart]);
       localStorage.setItem("myCart", JSON.stringify([...tempCart]));
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
        let tempCart = [...cart];
        const selectedProduct = tempCart.find(item=>item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.quantity = product.quantity + 1;
        product.total = product.quantity * product.price;
        setCart([...tempCart]);
        localStorage.setItem("myCart", JSON.stringify([...tempCart]));
    }

    function decrement(id){
        let tempCart = [...cart];
        const selectedProduct = tempCart.find(item=>item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.quantity = product.quantity - 1;;

        if(product.quantity === 0){
            removeItem(id);
        }else{
            product.total = product.quantity * product.price;
            setCart([...tempCart]);
            localStorage.setItem("myCart", JSON.stringify([...tempCart]));
        }
    }

    function removeItem(id){
        let tempProducts = [...products];
        let tempCart = [...cart];
        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProducts.indexOf(getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.quantity = 0;
        removedProduct.total= 0;
        setCart([...tempCart]);
        localStorage.setItem("myCart", JSON.stringify([...tempCart]));
        setProducts([...tempProducts]);
        localStorage.setItem("products", JSON.stringify(tempProducts));
    }

    function clearCart(){
        setCart([]);
        localStorage.clear();
        settingProducts();
    }

    function addTotal(){
        let subTotal=0;
        console.log("total");
        console.log(cart);
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