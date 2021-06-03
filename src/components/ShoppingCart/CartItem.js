import { Link } from 'react-router-dom'; 
import './CartItem.css';

function CartItem(props) {
    const product = props.product;

    function handleremoveFromShoppingCart(){
        console.log("in CartItem.handleremoveFromShoppingCart to remove index ", props.indexInCart);
        props.onRemoveFromCart(props.indexInCart);
    }

    return(
        
            <div className="shopping-cart-item">
                <Link to={`/gallery/${product.id}`}>
                    <img className="shopping-cart-item-img" src={product.galleryimage} alt={product.title}></img>
                </Link>
                <Link className="shopping-cart-item-title-link" to={`/gallery/${product.id}`}>
                    <h2 className="shopping-cart-item-title">{product.title}</h2>
                </Link>
                <h2 className="shopping-cart-item-price">${product.price}</h2>
                <button className="material-icons shopping-cart-remove-button" onClick={handleremoveFromShoppingCart}>
                    remove_shopping_cart
                </button>
            </div>
    );
}
export default CartItem;