import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Bio from './components/Bio/Bio';
import Links from './components/Links/Links';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Jumbotron />
      <Bio />
      <Links />
      <Footer />
    </div>  
  );
}

export default App;
