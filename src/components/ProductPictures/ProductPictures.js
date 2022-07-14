import {useState} from 'react';
import './ProductPictures.css';
import React from 'react';

function ProductPictures(props) {
    let productTitle=props.productTitle;
    let images = props.images;
    const maxIndex = images.length-1;
    const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

    const handleShiftImageClockwise = () => {
        setCurrentPictureIndex(currentPictureIndex === maxIndex ? 0 : currentPictureIndex+1);
    }

    const handleShiftImageCounterClockwise = () => {
        setCurrentPictureIndex(currentPictureIndex === 0 ? maxIndex : currentPictureIndex-1);
    }

    const rotateClockwiseButtonConditional = maxIndex===0 ? <div></div> : <span className="material-icons rotate-left-button" onClick={handleShiftImageClockwise}>undo</span>;
    const rotateCounterClockwiseButtonConditional = maxIndex===0 ? <div></div> : <span className="material-icons rotate-right-button" onClick={handleShiftImageCounterClockwise}>undo</span>;
 

    return(
        <div className="product-pictures">
            {rotateClockwiseButtonConditional}
            <img className="product-pictures-image" src={images[currentPictureIndex]} alt={"Pictures of " + productTitle} onClick={handleShiftImageClockwise}/>
            {rotateCounterClockwiseButtonConditional}
        </div>
    );
}

export default ProductPictures;