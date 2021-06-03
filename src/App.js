import './App.css';
import React,  { useState } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'; 
import About from './pages/About.js'; 
import Contact from './pages/Contact.js'; 
import Gallery from './pages/Gallery.js'; 
import Product from './pages/Product/Product';
import Cart from './components/ShoppingCart/Cart';
import NavBar from './components/Navbar/NavBar';
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

  function handleremoveFromShoppingCart(indexToRemove){
    console.log("in App.handleremoveFromShoppingCart with cart", shoppingCart);
    const newCart = shoppingCart.splice(indexToRemove,1);
    console.log("Going to remove index", indexToRemove, " with newCart: ", newCart);
    setShoppingCart(newCart);
  }

  return (
    <EasybaseProvider ebconfig={ebconfig}>
      <BrowserRouter>
        <div className="App">
          <Link to="/">
            <Welcome />
          </Link>
          <NavBar cartSize={shoppingCart.length}/>
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
            <Route path="/cart">
              <Cart currentCart={shoppingCart} onRemoveFromCart={handleremoveFromShoppingCart}/>
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