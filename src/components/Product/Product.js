import React, {useState} from 'react';
import './Product.css';

function Product {
    const [currentProduct, setCurrentProduct] = useState(null);

    //Pass the state in as props from the gallery. Use routing to set the URL as /products/title
    //How can we ensure that accessing the URL directly also works? Need to have querying here in case the user didn't come from the gallery.

    return(
        <div className="currentProduct">
            <img className="currentProductImage" src={currentProduct.galleryimage} alt={currentProduct.title}></img>
            <div className="currentProductText">
                <h1 className="currentProductTitle">{currentProduct.title}</h1>
                <h3 className="currentProductDescription">{currentProduct.description}</h3>
                <h2 className="currentProductPrive">{currentProduct.price}</h2>
            </div>
        </div>
    );
}

export default Product;