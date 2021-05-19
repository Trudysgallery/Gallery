import React from 'react';
import images from '../components/images.js';

function GalleryStatic() {
    return (
        <div className="GallStat">
            {images.map((i) =>
              <img alt={i.description} src={i.src}></img>
            )}    
        </div>
      );
    }
    
    export default GalleryStatic;