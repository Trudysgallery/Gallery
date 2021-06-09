import React, { useState, useEffect } from 'react';
import { useEasybase } from 'easybase-react';
import { queryProduct, fetchProductFromData } from '../../Utils/EasyBaseUtils';
import { useHistory , useParams } from "react-router-dom";
import './Product.css';

function Product(props) {
    const [currentProduct, setCurrentProduct] = useState();
    const [initialized, setInitialized] = useState(false);
    const { db, e } = useEasybase();

    const galleryData = props.data;
    let pid = useParams().productId;

    let history = useHistory();

    function handleAddToCart(){
        props.onAddToCart({"item":currentProduct,"operation":"add"});
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
                    console.log(e);
                    history.push("/gallery");
                }
            );
        }
      },[db,e,galleryData,history,pid]
    );

    if(!initialized){
        console.log("In product !initialized!");
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