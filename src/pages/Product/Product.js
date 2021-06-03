import React, { useState, useEffect } from 'react';
import { useEasybase } from 'easybase-react';
import { queryProduct, fetchProductFromData } from '../../Utils/EasyBaseUtils';
import { useParams } from "react-router-dom";
import './Product.css';

function Product(props) {
    const galleryData = props.data;
    const pid = useParams().productId;
    console.log("in Product with galleryData:", galleryData, "and pid: ", pid);
    const [currentProduct, setCurrentProduct] = useState();
    const [initialized, setInitialized] = useState(false);
    //const handleInitialized = (() => console.log("in handleInitialized"));
    const { db, e } = useEasybase();

    function handleAddToCart(){
        props.onAddToCart(currentProduct);
    }

    useEffect(() => {
        console.log("in Product.useEffect");
        if(galleryData.length>0){
            setCurrentProduct(fetchProductFromData(galleryData, pid));
            console.log("Initializing after setting product from data");
            setInitialized(true);
        } else {
            queryProduct(db,e,pid).then((queriedProduct) => {
                setCurrentProduct(queriedProduct);
                console.log("completed queryProduct");
                setInitialized(true);
            }).catch(
                e => {
                    alert("There was an error fetching this product. Please try again from the Gallery!");
                    console.log("Product data cannot be found right now ,error: ", e);
                }
            );
        }
        // return function cleanup(){};
      },[]
    );

    //Pass the state in as props from the gallery. Use routing to set the URL as /products/title
    //How can we ensure that accessing the URL directly also works? Need to have querying here in case the user didn't come from the gallery.
    if(!initialized){
        console.log("In product !initialized");
        return <div></div>;
    }
    return(
        <div className="current-product">
            <div className="current-product-image-page-half">
                <img className="current-product-image" src={currentProduct.galleryimage} alt={currentProduct.title}></img>
            </div>
            <div className="current-product-info-page-half">
                <div className="current-product-text">
                    <h1 className="current-product-title">{currentProduct.title}</h1>
                    <h2 className="current-product-price">${currentProduct.price}</h2>
                    <p className="current-product-description">{currentProduct.description}</p>
                </div>
                <div className="current-product-add-to-cart-section">
                    <button className="current-product-add-to-cart-button" onClick={handleAddToCart}>
                        Add to cart!
                    </button>
                </div>           
            </div>
        </div>
    );
}

export default Product;