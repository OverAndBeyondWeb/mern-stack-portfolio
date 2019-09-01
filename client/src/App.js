import React from 'react';
import graphic from './images/rebuild_graphic.jpg';
import './App.scss';

import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App"> 
      <Header />
      <Home />
    </div>
  );
}

export default App;
