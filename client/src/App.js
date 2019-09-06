import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <div className="App"> 
        <Route path="/" exact component={Home} />
      </div>
    </Router>
    
  );
}

export default App;
