import React,  { useState, useEffect } from 'react';
import { useEasybase } from 'easybase-react';
import './Gallery.css';
import "react-alice-carousel/lib/alice-carousel.css";
import { Link,Route,useRouteMatch } from 'react-router-dom';
import { generatePath } from "react-router";
import Product from 'components/Product/Product';

//Inspiration from https://www.sitepoint.com/react-router-complete-guide/

function Gallery() {
  console.log("Here in Gallery");
  const { url } = useRouteMatch();
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
      <Route path={`${url}/:productId`}>
        <Product galleryData={easybaseData}/>
      </Route>
      <Route exact path={url}>
        <div className="GalleryImages">
          {easybaseData.map((i) =>
            <Link key={i.id} to={`${url}/${i.id}`}>
              <img className="GalleryImage" src={i.galleryimage} alt={i.title} onDragStart={handleDragStart}></img>
            </Link>
          )}
          </div>
        </Route>
    </div>
  );
}

export default Gallery;