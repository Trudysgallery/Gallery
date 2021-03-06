import React,  { useState, useEffect } from 'react';
import { useEasybase } from 'easybase-react';
import { Link } from 'react-router-dom';
import { queryGallery } from '../Utils/EasyBaseUtils';
import './Gallery.css';

//Inspiration from https://www.sitepoint.com/react-router-complete-guide/

function Gallery(props) {
  const galleryData = props.data;
  const onLoadData = props.onLoadData;
  const [initialized, setInitialized] = useState(false);
  const handleDragStart = (e) => e.preventDefault();
  const { db } = useEasybase();

  useEffect(() => {
    if(galleryData.length===0){
      queryGallery(db).then(
        (result) => {
          onLoadData(result);
        } 
      );
    }
    setInitialized(true);
  },[db,onLoadData,galleryData]);

  if(!initialized){
    return <div></div>;
  }
  return (
    <div className="gallery">
      <div className="gallery-images">
        {galleryData.map((i) =>
          <Link key={i.id} to={`/gallery/${i.id}`} className="gallery-image-a">
            <img className="gallery-image-img" src={i.image1} alt={i.title} onDragStart={handleDragStart}></img>
          </Link>
        )}
        </div>
    </div>
  );
}

export default Gallery;