import React, {createContext, useState} from 'react'
import all_product from '../components/Assests/all_product'
export const ShopContext = createContext(null);


const getDefaultCart = () => {
    let cart = { };
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;

        
    }
    return cart;
}
const ShopContextProvider = (props) => {
const [cartItems, setCartItems] = useState(getDefaultCart());

// console.log(cartItem);
const addToCart = (itemId) =>{
    setCartItems((prev)=>({...prev, [itemId]: prev[itemId]+1}))
    console.log( 'Cart After Adding', cartItems);
}
const removeFromCart = (itemId) =>{
    setCartItems((prev)=>({...prev, [itemId]: prev[itemId]-1}))
    console.log('Cart after removing:', cartItems);
}
const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems){
        if(cartItems[item]>0){
            let itemInfo = all_product.find((product)=> product.id===Number(item));
            totalAmount +=itemInfo.new_price * cartItems[item];
        }
    }
    return totalAmount;

}

const getTotalCartItems = () => {
    let totalItem = 0;
    for(const item in cartItems){
        if(cartItems[item]>0){
            totalItem+= cartItems[item];
        }
    }
    return totalItem;
}

const contextValue = {getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart};
console.log('Initial cart:', cartItems);
console.log('All products:', all_product);
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
            
            </ShopContext.Provider>
    )
}
export default ShopContextProvider;