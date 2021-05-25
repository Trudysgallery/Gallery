import React,  { useState, useEffect } from 'react';
import images from '../components/images.js';
import AliceCarousel from 'react-alice-carousel';
import { useEasybase } from 'easybase-react';
import './Gallery.css';
import "react-alice-carousel/lib/alice-carousel.css";
import { setIn } from 'formik';


function Gallery() {
  const [easybaseData, setEasybaseData] = useState([]); //Remember to set array
  const [initialized, setInitialized] = useState(false);
  const handleDragStart = (e) => e.preventDefault();
  const handleInitialized = (() => console.log("in handleInitialized"));
  const { db } = useEasybase();

  const mounted = async() => {
    const ebData = await db("ARTWORK").return().all();
    setEasybaseData(ebData);
  }

  useEffect(() => {
    mounted();
    setInitialized(true);
    // return function cleanup() { 
    //   setInitialized(false);
    // };
  },[]);

  if(!initialized){
    return <div></div>;
  }
  return (
    <div className="Gallery">
      {easybaseData.map((i) =>
        <img className="GalleryImage" src={i.galleryimage} alt={i.title} onDragStart={handleDragStart}></img>
      )}
    </div>
  );
}

export default Gallery;