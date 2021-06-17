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

    const rotateLeftButtonConditional = maxIndex===0 ? <div></div> : <span className="material-icons rotate-left-button" onClick={handleShiftImageLeft}>undo</span>;
    const rotateRightButtonConditional = maxIndex===0 ? <div></div> : <span className="material-icons rotate-right-button" onClick={handleShiftImageRight}>undo</span>;
 

    return(
        <div className="product-pictures">
            {rotateLeftButtonConditional}
            <img className="product-pictures-image" src={images[currentPictureIndex]} alt={"Pictures of " + productTitle}/>
            {rotateRightButtonConditional}
        </div>
    );
}

export default ProductPictures;