import { Link } from 'react-router-dom'; 
import CartItemCounter from './CartItemCounter';
import './CartItem.css';

function CartItem(props) {
    const product = props.product.productInfo;
    const productQuantity = props.product.quantity;

    function handleEditCart(operation){
        props.onEditCart({item:product,operation:operation});
    }

    const handleRemoveCartItem = () => {handleEditCart("remove");}
    const handleIncrementCartItem = () => {handleEditCart("increment");}
    const handleDecrementCartItem = () => {handleEditCart("decrement");}

    return(
        
            <div className="shopping-cart-item">
                <Link to={`/gallery/${product.id}`}>
                    <img className="shopping-cart-item-img" src={product.galleryimage} alt={product.title}></img>
                </Link>
                <Link className="shopping-cart-item-title-link" to={`/gallery/${product.id}`}>
                    <h2 className="shopping-cart-item-title">{product.title}</h2>
                </Link>
                <h2 className="shopping-cart-item-price">${product.price}</h2>
                <CartItemCounter cartItemQuantity={productQuantity} onIncrementCartItem={handleIncrementCartItem} onDecrementCartItem={handleDecrementCartItem}/>
                <button className="material-icons shopping-cart-remove-button" onClick={handleRemoveCartItem}>
                    remove_shopping_cart
                </button>
            </div>
    );
}
export default CartItem;