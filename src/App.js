import React from 'react';

import Navigation from './components/Navigation';
import Header from './components/Header';
import Services from './components/Services'
import PortfolioGrid from './components/PortfolioGrid'
import About from './components/About'
import Team from './components/Team'
import Clients from './components/Clients'
import Contact from './components/Contact'
import './agency.css'


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <Services/>
      <PortfolioGrid/>
      <About/>
      <Team/>
    </div>
  );
}

export default App;
