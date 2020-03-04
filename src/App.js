import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <Header />
      <Jumbotron />
      <Card />
    </div>  
  );
}

export default App;
