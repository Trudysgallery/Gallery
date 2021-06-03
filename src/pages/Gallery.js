import React,  { useState, useEffect } from 'react';
import { useEasybase } from 'easybase-react';
import { Link } from 'react-router-dom';
import { queryGallery } from '../Utils/EasyBaseUtils';
import './Gallery.css';

//Inspiration from https://www.sitepoint.com/react-router-complete-guide/

function Gallery(props) {
  const galleryData = props.data;
  console.log("In Gallery with data: ", galleryData);
  const [initialized, setInitialized] = useState(false);
  const handleDragStart = (e) => e.preventDefault();
  //const handleInitialized = (() => console.log("in handleInitialized"));
  const { db } = useEasybase();

  useEffect(() => {
    console.log("in Gallery.useEffect with data:", galleryData);
    if(props.data.length===0){
      console.log("No Gallery data yet, querying...");
      queryGallery(db).then(
        (result) => {
          props.onLoadData(result);
        } 
      );
    }
    setInitialized(true);
    // return function cleanup() {};
  },[]);

  if(!initialized){
    console.log("In Gallery uninitialized.");
    return <div></div>;
  }
  return (
    <div className="gallery">
      <div className="gallery-images">
        {galleryData.map((i) =>
          <Link key={i.id} to={`/gallery/${i.id}`}>
            <img className="gallery-image" src={i.galleryimage} alt={i.title} onDragStart={handleDragStart}></img>
          </Link>
        )}
        </div>
    </div>
  );
}

export default Gallery;