import React,  { useState, useEffect } from 'react';
import { useEasybase } from 'easybase-react';
import { Link, Route, Switch, useRouteMatch, useParams } from 'react-router-dom';
import { queryGallery } from '../Utils/EasyBaseUtils';
import Product from './Product/Product';
import './Gallery.css';

//Inspiration from https://www.sitepoint.com/react-router-complete-guide/

function Gallery(props) {
  const galleryData = props.data;
  console.log("Here in Gallery with data: ", galleryData);
  const [initialized, setInitialized] = useState(false);
  const handleDragStart = (e) => e.preventDefault();
  //const handleInitialized = (() => console.log("in handleInitialized"));
  const { db } = useEasybase();

  useEffect(() => {
    console.log("in useEffect with data:", galleryData);
    if(props.data.length===0){
      console.log("No Gallery data yet, querying...");
      queryGallery(db).then(
        (result) => {
          props.onLoadData(result);
          setInitialized(true);
        } 
      );
    }
    // return function cleanup() {};
  },[]);

  if(!initialized){
    return <div></div>;
  }
  return (
    <div className="Gallery">
      <div className="GalleryImages">
        {galleryData.map((i) =>
          <Link key={i.id} to={`/gallery/${i.id}`}>
            <img className="GalleryImage" src={i.galleryimage} alt={i.title} onDragStart={handleDragStart}></img>
          </Link>
        )}
        </div>
    </div>
  );
}

export default Gallery;