import { Route } from 'react-router-dom';
import React from 'react'
import Header from './Components/Header'
import AllSets from './Components/AllSets'
import Home from './Components/Home'
import './App.css';
import Wishlist from './Components/Wishlist';
import Review from './Components/Review';
import Owned from './Components/Owned';


function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Route path='/' exact component={Home}/>
        <Route path='/sets' component={AllSets}/>
        <Route path='/wishlist' component={Wishlist}/>
        <Route path='/new_review/:id' component={Review}/>
        <Route path='/owned' component={Owned}/>

      </main>
      
    </div>
  );
}

export default App;
