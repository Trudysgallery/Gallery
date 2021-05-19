import React from 'react';
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Figure from 'react-bootstrap/Figure';
import images from '../components/images.js';
import AliceCarousel from 'react-alice-carousel';
import './Gallery.css';
import "react-alice-carousel/lib/alice-carousel.css";

let page = 0;
let moreImages=true;
const BATCHSIZE=2; //Should be dynamic?
const total=images.length;

function Gallery() {
  //console.log("At Start of gallery");
  //const [items, setItems] = useState([]);
  // const [totalHits, setTotalHits] = useState(0);
  // const [initialized, setInitialized] = useState(false);
  
  // const handleLoadMore = () => {
  //   console.log("Ran handleLoadMore. page: ", page);
  //   let startIndex = page*BATCHSIZE;
  //   page++;
  //   let currentBatchSize = BATCHSIZE;
    
  //   let remaining = total-startIndex;
  //   if(remaining<=BATCHSIZE){
  //     console.log("Last load");
  //     currentBatchSize=remaining;
  //     moreImages=false;
  //     if(currentBatchSize<1){return;}
  //   }
  //   setItems(items.concat(images.slice(startIndex,startIndex+currentBatchSize)));
  //   console.log(moreImages);
    // Example integration-backed items (function was async):
    // const response = await getPhotos(page);
    // setItems(items.concat(response.data.hits));
    // setTotalHits(response.data.totalHits);
  //}

  // useEffect(() => {
  //   console.log("Ran useEffect, moreImages:", moreImages);
  //   if(moreImages){
  //     handleLoadMore();
  //   }
  //   return function cleanup(){
  //     console.log("Ran useEffect cleanup");
  //     moreImages=true;
  //     page=0;
  //     setItems([]);
  //   }
  // },[]);

  const handleDragStart = (e) => e.preventDefault();

  const handleInitialized = (() => console.log("in handleInitialized"));

  return (
  
    <div className="HomePage">
      <AliceCarousel className="Carousel" infinite autoPlay mouseTracking autoHeight keyboardNavigation disableButtonsControls onInitialized={handleInitialized} autoPlayInterval={5000} items={images.map((i) =>
        <img className="CarouselImg" src={i.src} alt={i.description} onDragStart={handleDragStart}></img>
      )}/>
    {/*<InfiniteScroll
        pageStart={page}
        loadMore={handleLoadMore}
        hasMore={moreImages}
        threshold={1000}
    >
        {items.map((i, index) =>
            <Figure key={index}>
              <Figure.Image
                width={window.innerWidth / 3.5}
                src={i.src}
            />
           </Figure>
        )}
        </InfiniteScroll>*/}
</div>
  );
}

export default Gallery;