import CartItem from './CartItem.js';
import {calculateCartTotal} from '../../Utils/Utils.js';
import './Cart.css';


function Cart(props) {
    const cart = props.currentCart;
    const sum = calculateCartTotal(cart);
    console.log("in Cart with cart ", cart);

    function handleremoveFromShoppingCart(index){
        console.log("in Cart.handleremoveFromShoppingCart to remove index ", index);
        props.onRemoveFromCart(index);
    }

    if(cart.length===0){
        return(
            <div className="shopping-cart-empty">
                Your cart is empty.
            </div>
        );
    }
    return(
        <div className="shopping-cart-page">
            <button className="shopping-cart-checkout-button">Checkout ${sum}</button>
            <div className="shopping-cart-box">
                <div className="shopping-cart-items">
                    {props.currentCart.map((i,index) =>
                        <CartItem key={index} className="shopping-cart-item" product={i} indexInCart={index} onRemoveFromCart={handleremoveFromShoppingCart}/>
                    )}
                </div>
            </div>
            <button className="shopping-cart-checkout-button">Checkout ${sum}</button>
        </div>
    );
}
export default Cart;