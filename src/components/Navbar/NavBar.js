import { Link } from 'react-router-dom'; 
import './NavBar.css';

function NavBar(props){
    const cartSize = props.cartSize ===0 ? null : props.cartSize;
    return(
        <nav className="nav-bar">
            <Link to="/gallery" className="nav-bar-item">Gallery</Link>
            <Link to="/about" className="nav-bar-item">About</Link>
            <Link to="/contact" className="nav-bar-item">Contact Me</Link>
            <div className="nav-bar-cart-icon">
                <Link to="/wishlist" className="material-icons cart">shopping_cart</Link>
                <div className="nav-bar-cart-size">{cartSize}</div>
            </div>
        </nav>
    );
}
export default NavBar;