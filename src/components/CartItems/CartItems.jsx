import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../Assests/cart_cross_icon.png';

const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
console.log('all product in cartitems:', all_product);
console.log('cart items in cartitems', cartItems);
    if (!all_product || !cartItems) {
        return <div>Loading...</div>;
    }

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            <div>
                <hr />
                {all_product.map((product) => {
                    const quantity = cartItems[product.id] || 0; // Default to 0 if undefined
                    if (quantity > 0) {
                        return (
                            <div className="cartitems-format" key={product.id}>
                                <img src={product.image} alt={product.name} className='carticon-product-icon' />
                                <p>{product.name}</p>
                                <p>{product.new_price}</p>
                                <button className='cartitems-quantity'>{quantity}</button>
                                <p>{product.new_price * quantity}</p>
                                <img 
                                    src={remove_icon} 
                                    onClick={() => removeFromCart(product.id)} 
                                    alt="Remove item" 
                                    className='remove-icon'
                                />
                            </div>
                        );
                    }
                    return null;
                })}
                <div className="cartitems-down">
                    <div className="cartitems-total">
                        <h1>cart Totals</h1>
                        <div>
                            <div className="cartitems-total-item">
                                <p>Shipping Free</p>
                                <p>Free</p>
                            </div>
                            <hr />
                            <div className="cartitems-total-item">
                                <h3>Total</h3>
                                <h3>${getTotalCartAmount()}</h3>
                            </div>
                        </div>

                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                    <div className="cartitems-promocode">
                        <p>If you have a promo code, Enter it here</p>
                        <div className="cartitems-promobox">
                            <input type="text" placeholder='promo code' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
