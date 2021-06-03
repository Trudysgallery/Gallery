import './Cart.css';
import CartItem from './CartItem.js';

function Cart(props) {


    return(
        <div className="ShoppingCart">
            {props.cart.map((i) =>
                <CartItem item={i}/>
            )}
        </div>
    );
}
export default Cart;