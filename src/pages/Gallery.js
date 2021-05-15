import React from 'react';
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Figure from 'react-bootstrap/Figure';
import images from '../components/images.js';
import './Gallery.css';

let page = 0;
let moreImages=true;
const BATCHSIZE=2; //Should be dynamic?
const total=images.length;

function Gallery() {
  const [items, setItems] = useState([]);
  // const [totalHits, setTotalHits] = useState(0);
  // const [initialized, setInitialized] = useState(false);
  
  const handleLoadMore = () => {
    let startIndex = page*BATCHSIZE;
    page++;
    let currentBatchSize = BATCHSIZE;
    
    let remaining = total-startIndex;
    if(remaining<=BATCHSIZE){
      currentBatchSize=remaining;
      moreImages=false;
      if(currentBatchSize<1){return;}
    }
    setItems(items.concat(images.slice(startIndex,startIndex+currentBatchSize)));
    // Example integration-backed items (function was async):
    // const response = await getPhotos(page);
    // setItems(items.concat(response.data.hits));
    // setTotalHits(response.data.totalHits);
  }

  useEffect(() => {
    handleLoadMore();
    return function cleanup(){
      moreImages=true;
      setItems([]);
    }
  },[]);

  return (
    <div className="HomePage">
    <InfiniteScroll
        pageStart={page}
        loadMore={handleLoadMore}
        hasMore={moreImages}
        threshold={100}
    >
        {items.map((i, index) =>
        <div>
          {/* <img key={index} src={i} /> */}
          <h1 key={index}>{i.description}</h1>
            {/* // <Figure key={index}>
            //     <Figure.Image
            //         width={window.innerWidth / 3.5}
            //         src={i.src}
            //     />
            // </Figure> */}
        </div>
        )}
    </InfiniteScroll>
</div>
  );
}

export default Gallery;