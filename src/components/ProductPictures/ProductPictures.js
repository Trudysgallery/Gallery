import {useState} from 'react';
import './ProductPictures.css';
import React from 'react';

function ProductPictures(props) {
    let productTitle=props.productTitle;
    let images = props.images;
    const maxIndex = images.length-1;
    const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

    const handleShiftImageLeft = () => {
        setCurrentPictureIndex(currentPictureIndex === 0 ? maxIndex : currentPictureIndex-1);                
    }

    const handleShiftImageRight = () => {
        setCurrentPictureIndex(currentPictureIndex === maxIndex ? 0 : currentPictureIndex+1);                
    }

    return(
        <div className="product-pictures">
            <span className="material-icons rotate-left-button" onClick={handleShiftImageLeft}>undo</span>
            <img className="product-pictures-image" src={images[currentPictureIndex]} alt={"Pictures of " + productTitle}/>
            <span className="material-icons rotate-right-button" onClick={handleShiftImageRight}>undo</span>
        </div>
    );
}

export default ProductPictures;