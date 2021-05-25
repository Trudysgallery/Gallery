import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import About from './pages/About.js'; 
import Contact from './pages/Contact.js'; 
import Gallery from './pages/Gallery.js'; 
import { EasybaseProvider } from 'easybase-react';
import ebconfig from './ebconfig';
import Welcome from './components/Welcome/Welcome.js'


function App() {
  return (
    <EasybaseProvider ebconfig={ebconfig}>
      <BrowserRouter>
        <div className="App">
          <Welcome />
          <div className="Navigation">
          <div className="navigation-sub">
              <Link to="/" className="nav-item">Gallery</Link>
              <Link to="/about" className="nav-item">About</Link>
              <Link to="/contact" className="nav-item">Contact Me</Link>
            </div>
          </div>
          <Route exact path="/" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    </EasybaseProvider>
  );
} 

export default App;