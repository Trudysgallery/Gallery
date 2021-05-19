import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import About from './pages/About.js'; 
import Contact from './pages/Contact.js'; 
import Gallery from './pages/Gallery.js'; 
import GalleryStatic from './pages/GalleryStatic.js'; 

import Welcome from './components/Welcome/Welcome.js'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Welcome />

        <div className="Navigation">
        <div className="navigation-sub">
            <Link to="/" className="nav-item">Gallery</Link>
            {/* <Link to="/articles" className="nav-item">Articles</Link> */}
            <Link to="/about" className="nav-item">About</Link>
            <Link to="/contact" className="nav-item">Contact Me</Link>
          </div>
        </div>
        {/* Set up the Router */}
        <Route exact path="/" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
} 

export default App;