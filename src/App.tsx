import React from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import { navigation } from './components/navbar/navigation';

function App() {
  const { brand, links } = navigation;

  return (
    <div className="App">
      <Navbar brand={brand} links={links}/>
    </div>
  );
}

export default App;
