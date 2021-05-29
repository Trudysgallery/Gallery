import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import About from './pages/About.js'; 
import Contact from './pages/Contact.js'; 
import Gallery from './pages/Gallery.js'; 
import HomeCarousel from './components/HomeCarousel/HomeCarousel.js'; 
import { EasybaseProvider, useEasybase } from 'easybase-react';
import ebconfig from './ebconfig';
import Welcome from './components/Welcome/Welcome.js'
import Product from 'components/Product/Product';


function App() {
  return (
    <EasybaseProvider ebconfig={ebconfig}>
      <BrowserRouter>
        <div className="App">
          <Link to="/"><Welcome /></Link>
          <div className="Navigation">
          <div className="navigation-sub">
              <Link to="/gallery" className="nav-item">Gallery</Link>
              <Link to="/about" className="nav-item">About</Link>
              <Link to="/contact" className="nav-item">Contact Me</Link>
            </div>
          </div>
          <Route exact path="/">
            <HomeCarousel/>
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/> 
          </Route>
          {/* <Route path="/gallery/:productName">
            <Product/>
          </Route> */}
        </div>
      </BrowserRouter>
    </EasybaseProvider>
  );
} 

export default App;