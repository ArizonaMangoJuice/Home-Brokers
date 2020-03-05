import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Card from './components/Card/Card';
import Bio from './components/Bio/Bio';

function App() {
  return (
    <div className="App">
      <Header />
      <Jumbotron />
      <Bio />
      <Card />
    </div>  
  );
}

export default App;
