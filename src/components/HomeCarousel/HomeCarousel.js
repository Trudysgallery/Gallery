import React,  { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { queryGallery } from '../../Utils/EasyBaseUtils';
import { useEasybase } from 'easybase-react';
import { Link } from 'react-router-dom'; 
import './HomeCarousel.css';
import "react-alice-carousel/lib/alice-carousel.css";

function HomeCarousel(props) {
  const { db } = useEasybase();
  const [easybaseData, setEasybaseData] = useState([]); //Remember to set array
  const [initialized, setInitialized] = useState(false);
  const handleDragStart = (e) => e.preventDefault();
  //const handleInitialized = (() => console.log("in handleInitialized"));

  function handleChange(e){
    props.onSlideChanged(e.slide);
  }

  useEffect(() => {
    queryGallery(db).then(
      (galleryData) => {
        setEasybaseData(galleryData);
        setInitialized(true);
      } 
    );
    return function cleanup() { 
      setInitialized(false);
    };
  },[db]);

  if(!initialized){
    return <div></div>;
  }
  return (
    <div className="home-carousel-page">
      <AliceCarousel className="alice-carousel"
        autoPlay autoPlayInterval={5000} infinite
        mouseTracking keyboardNavigation disableButtonsControls
        onSlideChanged={handleChange}
        activeIndex={props.currentSlide}
        items={easybaseData.map((i) =>
          <Link key={i.id} to={`/gallery/${i.id}`}>
            <img className="alice-carousel-img" src={i.galleryimage} alt={i.title} onDragStart={handleDragStart}></img>
          </Link>
        )}/>
    </div>
  );
}

export default HomeCarousel;