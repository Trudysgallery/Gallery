import React,  { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { useEasybase } from 'easybase-react';
import './HomeCarousel.css';
import "react-alice-carousel/lib/alice-carousel.css";


function HomeCarousel() {
  const [easybaseData, setEasybaseData] = useState([]); //Remember to set array
  const [initialized, setInitialized] = useState(false);
  const { db } = useEasybase();
  const handleDragStart = (e) => e.preventDefault();
  //const handleInitialized = (() => console.log("in handleInitialized"));

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
    <div className="HomeCarousel">
      {//onInitialized={handleInitialized}} 
      }
      <AliceCarousel className="Carousel" autoPlayInterval={5000} infinite autoPlay mouseTracking autoHeight keyboardNavigation disableButtonsControls 
      items={easybaseData.map((i) =>
        <img className="CarouselImg" src={i.galleryimage} alt={i.title} onDragStart={handleDragStart}></img>
      )}/>
    </div>
  );
}

export default HomeCarousel;