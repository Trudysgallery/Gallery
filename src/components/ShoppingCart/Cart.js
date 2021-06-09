import CartItem from './CartItem.js';
import {calculateCartTotalCost} from '../../Utils/CartUtils.js';
import './Cart.css';


function Cart(props) {
    const cart = props.currentCart;
    const handleEditCart = props.onEditCart;
    const sum = calculateCartTotalCost(cart);
    console.log("in Cart with cart ", cart);

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
                    {props.currentCart.map((i) =>
                        <CartItem key={i.productInfo.id} className="shopping-cart-item" product={i} onEditCart={handleEditCart}/>
                    )}
                </div>
            </div>
            <button className="shopping-cart-checkout-button">Checkout ${sum}</button>
        </div>
    );
}
export default Cart;