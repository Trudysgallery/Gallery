import React,  { useState, useEffect } from 'react';
import { useEasybase } from 'easybase-react';
import { Link, Route, Switch, useRouteMatch, useParams } from 'react-router-dom';
import { queryGallery } from '../Utils/EasyBaseUtils';
import Product from 'components/Product/Product';
import './Gallery.css';

//Inspiration from https://www.sitepoint.com/react-router-complete-guide/

function Gallery() {
  console.log("Here in Gallery");
  const [easybaseData, setEasybaseData] = useState([]); //Remember to set array
  console.log("ebData: ", easybaseData);
  const [initialized, setInitialized] = useState(false);
  const handleDragStart = (e) => e.preventDefault();
  //const handleInitialized = (() => console.log("in handleInitialized"));
  const { db } = useEasybase();

  useEffect(() => {
    queryGallery(db).then(
      (galleryData) => {
        setEasybaseData(galleryData);
        setInitialized(true);
      } 
    );
    // return function cleanup() {};
  },[]);

  if(!initialized){
    return <div></div>;
  }
  return (
    <div className="Gallery">
      <Switch>
        <Route path="/gallery/:productId">
          <Product galleryData={easybaseData}/>
        </Route>
        <Route exact path="/gallery">
          <div className="GalleryImages">
            {easybaseData.map((i) =>
              <Link key={i.id} to={`/gallery/${i.id}`}>
                <img className="GalleryImage" src={i.galleryimage} alt={i.title} onDragStart={handleDragStart}></img>
              </Link>
            )}
            </div>
          </Route>
        </Switch>
    </div>
  );
}

export default Gallery;