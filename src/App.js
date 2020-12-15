import { Route } from 'react-router-dom';
import React from 'react'
import Header from './Components/Header'
import AllSets from './Components/AllSets'
import Home from './Components/Home'
import './App.css';
import Wishlist from './Components/Wishlist';


function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Route path='/' exact component={Home}/>
        <Route path='/sets' component={AllSets}/>
        <Route path='/wishlist' component={Wishlist}/>

      </main>
      
    </div>
  );
}

export default App;
