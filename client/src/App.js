import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <div className="App"> 
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
      </div>
    </Router>
    
  );
}

export default App;
