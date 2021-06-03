import './App.css';
import React,  { useState } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'; 
import About from './pages/About.js'; 
import Contact from './pages/Contact.js'; 
import Gallery from './pages/Gallery.js'; 
import Product from './pages/Product/Product'
import HomeCarousel from './components/HomeCarousel/HomeCarousel.js'; 
import { EasybaseProvider } from 'easybase-react';
import ebconfig from './ebconfig';
import Welcome from './components/Welcome/Welcome.js'


function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [allProductData, setAllProductData] = useState([]);

  function handleAddToShoppingCart(newItem){
    setShoppingCart((oldCart) =>[...oldCart, newItem]);
  }
  //Consider removal along with duplicate items
  // function handleremoveFromShoppingCart(itemToRemove)
  // }

  return (
    <EasybaseProvider ebconfig={ebconfig}>
      <BrowserRouter>
        <div className="App">
          <Link to="/">
            <Welcome />
          </Link>
          <div className="Navigation">
            <div className="navigation-sub">
              <Link to="/gallery" className="nav-item">Gallery</Link>
              <Link to="/about" className="nav-item">About</Link>
              <Link to="/contact" className="nav-item">Contact Me</Link>
            </div>
          </div>
          <Switch>
            <Route path="/gallery/:productId">
              <Product data={allProductData} onAddToCart={handleAddToShoppingCart}/>
            </Route>
            <Route path="/gallery">
              <Gallery data={allProductData} onLoadData={setAllProductData}/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/contact">
              <Contact/> 
            </Route>
            <Route exact path="/">
              <HomeCarousel currentSlide={currentSlide} onSlideChanged={setCurrentSlide}/>
            </Route>
            <Route>
              <Gallery data={allProductData} onLoadData={setAllProductData}/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </EasybaseProvider>
  );
} 

export default App;