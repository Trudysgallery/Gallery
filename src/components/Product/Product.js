import React, {useState, useEffect} from 'react';
import { useEasybase } from 'easybase-react';
import './Product.css';
import {AddToCartButton} from '../AddToCartButton/AddToCartButton';
import { useParams } from "react-router-dom";

function Product(galleryData) {
    console.log("in Product with galleryData:", galleryData);
    const pid = useParams().productId;
    const [currentProduct, setCurrentProduct] = useState([]); //Remember to set array
    const [initialized, setInitialized] = useState(false);
    const handleInitialized = (() => console.log("in handleInitialized"));
    const { db, e } = useEasybase();
    
    const queryData = async() => {
        console.log("in Product.queryData")
        const queriedProduct = await db("ARTWORK").return().where(e.eq("id",pid)).one();
        setCurrentProduct(queriedProduct);
    }

    useEffect(() => {
        queryData();
        // return function cleanup() { 
        setInitialized(true);
        // };
      },[]);
    //Pass the state in as props from the gallery. Use routing to set the URL as /products/title
    //How can we ensure that accessing the URL directly also works? Need to have querying here in case the user didn't come from the gallery.
    if(!initialized){
        return <div></div>;
    }
    return(
        <div className="currentProduct">
            <div className="currentProductImagePageHalf">
                <img className="currentProductImage" src={currentProduct.galleryimage} alt={currentProduct.title}></img>
            </div>
            <div className="currentProductTextPageHalf">
                <div className="currentProductText">
                    <h1 className="currentProductTitle">{currentProduct.title}</h1>
                    <h2 className="currentProductPrice">${currentProduct.price}</h2>
                    <p className="currentProductDescription">{currentProduct.description}</p>
                    <AddToCartButton />
                </div>
            </div>
        </div>
    );
}

export default Product;