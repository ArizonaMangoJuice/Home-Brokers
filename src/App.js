import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Bio from './components/Bio/Bio';
import Links from './components/Links/Links';
import Footer from './components/Footer/Footer';

import {
  Route,
} from 'react-router-dom'
import Buyers from './components/Buyers/Buyers';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/' component={Jumbotron}/>
      <Route exact path='/' component={Bio}/>
      <Route exact path='/' component={Links}/>
      {/* <Route exact path='/' component={Footer}/> */}
      <Route exact path='/buyers' component={Buyers}/>


      <Footer />
    </div>  
  );
}

export default App;
