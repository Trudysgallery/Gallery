import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';
import './AddToCartButton.css';

function AddToCartButton(props){
    return(
        <div className="AddToCartButton">
            <button onClick={props.onAddToCart}>
                Add to cart!
            </button>
        </div>
    )
}
export default AddToCartButton;