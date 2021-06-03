import { propTypes } from "react-bootstrap/esm/Image";

function CartItem(props) {
    const item = props.cartItem;

    return(
        <div className="ShoppingCartItem">
            <img className="cartItemImg" src={item.galleryimage} alt={item.title}></img>
            <h2 classNamge="cartItemTitle">{item.title}</h2>
            <h2 className="currentProductPrice">${item.price}</h2>
        </div>
    );
}
export default CartItem;