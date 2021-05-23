import React,  { useState, useEffect } from 'react';
import images from '../components/images.js';
import AliceCarousel from 'react-alice-carousel';
import { useEasybase } from 'easybase-react';
import './Gallery.css';
import "react-alice-carousel/lib/alice-carousel.css";


function Gallery() {
  const [easybaseData, setEasybaseData] = useState([]);
  const handleDragStart = (e) => e.preventDefault();
  const handleInitialized = (() => console.log("in handleInitialized"));
  const { db } = useEasybase();

  const mounted = async() => {
    console.log("in mounted");
    const ebData = await db("ARTWORK").return().all();
    console.log("returned from await");
    setEasybaseData(ebData);
  }

  useEffect(() => {
    console.log("in useEffect");
    mounted();
  },[]);

  return (
    <div className="Gallery">
      {easybaseData.map((i,index) =>
        <img key={index} className="CarouselImg" src={i.Galleryimage} alt={i.Title} onDragStart={handleDragStart}></img>
      )}
      {/* <AliceCarousel className="Carousel" infinite autoPlay mouseTracking autoHeight keyboardNavigation disableButtonsControls 
      onInitialized={handleInitialized} autoPlayInterval={5000} 
      items={easybaseData.map((i) =>
        <img className="CarouselImg" src={i.Galleryimage} alt={i.Title} onDragStart={handleDragStart}></img>
      )}/> */}
    </div>
  );
}

export default Gallery;