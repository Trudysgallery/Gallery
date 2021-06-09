import './CartItemCounter.css';

function CartItemCounter(props) {
    const quantity = props.cartItemQuantity;
    const decrementButton = quantity > 1 ? <button className="cart-item-counter-button" onClick={props.onDecrementCartItem}>-</button> : null;

    return(
        <div className="cart-item-counter">
            <button className="cart-item-counter-button" onClick={props.onIncrementCartItem}>+</button>
            <div className="cart-item-counter-value">{props.cartItemQuantity}</div>
            {decrementButton}
        </div>
    );
}
export default CartItemCounter;