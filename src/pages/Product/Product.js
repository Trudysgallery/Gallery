import React, { useState, useEffect } from 'react';
import { useEasybase } from 'easybase-react';
import { fetchProductFromData, queryProduct } from '../../Utils/EasyBaseUtils.js';
import { fetchNotNullImagesFromProduct } from '../../Utils/GeneralUtils.js';
import { useHistory , useParams } from "react-router-dom";
import ProductPictures from '../../components/ProductPictures/ProductPictures.js'
import './Product.css';

const POT_BLURB = "All of my pots are painted with quality acrylic paint and primed before and after painting, so my art is here to stay even for outdoor pots!"

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
        if(galleryData.length>0){
            setCurrentProduct(fetchProductFromData(galleryData, pid));
            setInitialized(true);
        } else {
            queryProduct(db,e,pid).then((queriedProduct) => {
                setCurrentProduct(queriedProduct);
                setInitialized(true);
            }).catch(
                e => {
                    console.log(e);
                    history.push("/gallery");
                }
            );
        }
        // queryProductImages(db,e,pid).then((productImages) => {
        //     setCurrentProduct(prod => {
        //         return {...prod, allimages:productImages}
        //     });
        // });
      },[db,e,galleryData,history,pid]
    );

    if(!initialized){
        return <div></div>;
    }
    return(
        <div className="current-product">
            <div className="current-product-image-page-half">
                <ProductPictures images={fetchNotNullImagesFromProduct(currentProduct)} productTitle={currentProduct.title}/>
            </div>
            <div className="current-product-info-page-half">
                <div className="current-product-text">
                    <h1 className="current-product-title">{currentProduct.title}</h1>
                    {/* <h2 className="current-product-price">${currentProduct.price}</h2> */}
                    <p className="current-product-description">{currentProduct.description}</p>
                    <p className="current-product-blurb">{POT_BLURB}</p>
                </div>
                <div className="current-product-add-to-cart-section">
                    <button className="current-product-add-to-cart-button" onClick={handleAddToCart}>
                        Add to wishlist!
                    </button>
                </div>           
            </div>
        </div>
    );
}

export default Product;