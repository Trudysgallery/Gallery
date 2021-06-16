import './App.css';
import React,  { useState } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'; 
import About from './pages/About.js'; 
import Contact from './pages/Contact.js'; 
import Gallery from './pages/Gallery.js'; 
import Product from './pages/Product/Product';
import Cart from './components/ShoppingCart/Cart';
import NavBar from './components/Navbar/NavBar.js';
import HomeCarousel from './components/HomeCarousel/HomeCarousel.js'; 
import Welcome from './components/Welcome/Welcome.js';
import { addItemToCart, calculateCartSize, DecrementItemInCart, IncrementItemInCart, removeItemfromCart } from './Utils/CartUtils.js'; 
import { EasybaseProvider } from 'easybase-react';
import ebconfig from './ebconfig';

const DEVELOPMENT_MESSAGE="This site is under development. I appreciate your patience!"
function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [shoppingCart, setShoppingCart] = useState([]); //Array of {info:{...},quantity:x}
  const [allProductData, setAllProductData] = useState([]);

  const handleEditShoppingCart = ({item, operation}) => {
    switch(operation){
      case "add": handleAddShoppingCartItem(item);
        break;
      case "remove": handleRemoveShoppingCartItem(item);
        break;
      case "increment": handleIncrementShoppingCartItem(item);
        break;
      case "decrement": handleDecrementShoppingCartItem(item);
        break;
      default:
    }
  }

  const handleAddShoppingCartItem = (itemToAdd) => {
    setShoppingCart(addItemToCart(itemToAdd,shoppingCart));
  }

  const handleRemoveShoppingCartItem = (itemToRemove) => {
    setShoppingCart(removeItemfromCart(itemToRemove,shoppingCart));
  }

  const handleIncrementShoppingCartItem = (itemToIncrement) => {
    setShoppingCart(IncrementItemInCart(itemToIncrement,shoppingCart));
  }

  const handleDecrementShoppingCartItem = (itemToDecrement) => {
    setShoppingCart(DecrementItemInCart(itemToDecrement,shoppingCart));
  }

  return (
    <EasybaseProvider ebconfig={ebconfig}>
      <BrowserRouter>
        <div className="App">
          <Link to="/">
            <Welcome />
          </Link>
          <NavBar cartSize={calculateCartSize(shoppingCart)}/>
          <Switch>
            <Route path="/gallery/:productId">
              <Product data={allProductData} onAddToCart={handleEditShoppingCart}/>
            </Route>
            <Route path="/gallery">
              <Gallery data={allProductData} onLoadData={setAllProductData}/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/contact">
              <Contact currentCart={shoppingCart}/> 
            </Route>
            <Route path="/wishlist">
              <Cart currentCart={shoppingCart} onEditCart={handleEditShoppingCart}/>
            </Route>
            <Route exact path="/">
              <Gallery data={allProductData} onLoadData={setAllProductData}/>
              {/* <HomeCarousel currentSlide={currentSlide} onSlideChanged={setCurrentSlide}/> */}
            </Route>
            <Route>
              <Gallery data={allProductData} onLoadData={setAllProductData}/>
            </Route>
          </Switch>
          <p className='development-message'>{DEVELOPMENT_MESSAGE}</p>
        </div>
      </BrowserRouter>
    </EasybaseProvider>
  );
} 

export default App;