import CartItem from './CartItem.js';
import {calculateCartTotalCost} from '../../Utils/CartUtils.js';
import { Link } from 'react-router-dom';
import './Cart.css';
const EMPTY_CART_MESSAGE='Your wishlist is empty.';

function Cart(props) {
    const cart = props.currentCart;
    const handleEditCart = props.onEditCart;
    const sum = calculateCartTotalCost(cart);

    if(cart.length===0){
        return(
            <div className="shopping-cart-empty">
                {EMPTY_CART_MESSAGE}
            </div>
        );
    }
    return(
        <div className="shopping-cart-page">
            <Link to={'/contact'}>
                {/* <button className="shopping-cart-checkout-button">Checkout ${sum}</button> */}
                <button className="shopping-cart-checkout-button">Contact me to order</button>
            </Link>            
            <div className="shopping-cart-box">
                <div className="shopping-cart-items">
                    {props.currentCart.map((i) =>
                        <CartItem key={i.productInfo.id} className="shopping-cart-item" product={i} onEditCart={handleEditCart}/>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Cart;