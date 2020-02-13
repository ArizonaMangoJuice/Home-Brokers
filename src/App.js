import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Me from './components/Me/Me';

function App() {
  return (
    <div className="App">
      <Header />
      <Jumbotron />
      <Me />
    </div>  
  );
}

export default App;
