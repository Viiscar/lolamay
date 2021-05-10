import React, {useState, useEffect, useCallback} from 'react'
import {storeProducts, detailProduct, paymentConfirmation} from './Data';
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
    const [shipping, setShipping] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartList, setCartList] = useState('');
    const [confirmationMessage] = useState(paymentConfirmation);
    //Sets Cart and Products on start
    useEffect(() =>{
        settingCartAndProducts();
    },[]);

    //Sets the total price
    const addTotal = useCallback(() => {
        let subTotal=0;
        cart.map(item=>(subTotal += item.total));
        const tempTax = subTotal * 0.115;
        const tax = parseFloat(tempTax.toFixed(2));
        const shippingFee = subTotal >= 39 ? 0 : 4;
        const total = subTotal + tax + shippingFee;
        setCartSubtotal(subTotal.toFixed(2));
        setCartTax(tax.toFixed(2));
        setShipping(shippingFee.toFixed(2));
        setCartTotal(total.toFixed(2));
    },[cart]);

    //addTotal callback for setCart
    useEffect(() => {
        if (cart !== []) {
            addTotal();
        } 
    }, [cart,addTotal]);
    
     //Creates the order to send to backend
    const order = useCallback(() => {
        let order =[];

        for(let i = 0; i<cart.length; i++){
            let product = {
                name : cart[i].title,
                price : cart[i].price,
                quantity : cart[i].quantity,
            }
            order.push(product);

        }

        const orderList = {
            items: order,
            subtotal: cartSubtotal,
            tax: cartTax,
            total:cartTotal
        };

        setCartList(orderList);
    },[cart, cartSubtotal, cartTax, cartTotal]);

    //Calls order() when cartTax changes
    useEffect(() => {
        order();
    },[cartTax, order]);



    //Sets Cart and Products based on localstorage if it exists 
    function settingCartAndProducts() {
        let tempProducts = [];
        storeProducts.forEach(item=>{
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        })
        //If we can use localStorage
        if (typeof(Storage) !== "undefined") {
            // If localStorage is empty
            if(localStorage.length === 0){
                localStorage.setItem("products", JSON.stringify(tempProducts));
                localStorage.setItem("myCart", JSON.stringify([]));
                setProducts(tempProducts);
            }else{
                const cartStorage = localStorage.getItem('myCart');
                const parsedCartStorage = JSON.parse(cartStorage);
                const productsStorage = localStorage.getItem('products');
                const parsedproductsStorage = JSON.parse(productsStorage);
                setCart(parsedCartStorage);
                setProducts(parsedproductsStorage);
            }
        }else{
            setProducts(tempProducts);
        } 
    }

    //Gets the product selected
    function getItem(id) {
        //if the id is a number we look in productlist, else (boolean) we look on confirmationMessage
        if (typeof id === 'number'){
            const product = products.find(item => item.id === id);
            return product;
        }else{
            const confirmation = confirmationMessage.find(item => item.id === id);
            return confirmation;
        }
    }

    //Sets the selected product details 
    function handleDetail(id) {
        const product = getItem(id);
        setDetail(product);
    };

    //Adds product to cart
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
       let tempCart = cart;
       tempCart.push(product);
       setCart([...tempCart]);
       localStorage.setItem("myCart", JSON.stringify([...tempCart]));
    };

    //Opens the modal
    function openModal(id) {
        const product = getItem(id);
        setModal(true);
        setModalProduct(product);
    }

    //Closes the modal
    function closeModal(){
        setModal(false);
    }

    //Increments the number of product items
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
    
    //Decrememts the number of product items
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

    //Removes a product from cart
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

    //Removes all from cart
    function clearCart(){
        setCart([]);
        localStorage.clear();
        settingCartAndProducts();
    }
    
    //Returns context props
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
            shipping, 
            cartTotal,
            increment,
            decrement,
            removeItem,
            clearCart,
            cartList
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};