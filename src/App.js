import { Route } from 'react-router-dom';
import React, { useState } from 'react'
import Header from './Components/Header'
import AllSets from './Components/AllSets'
import Home from './Components/Home'
import './App.css';
import Wishlist from './Components/Wishlist';
import Review from './Components/Review';
import Owned from './Components/Owned';


function App() {
  const [legoId, setLegoId] = useState(null)

  return (
    <div className="App">
      <Header />

      <main>
        <Route path='/' exact component={Home}/>
        <Route path='/sets' render={() => <AllSets setLegoId={setLegoId}/>}/>
        <Route path='/wishlist' component={Wishlist}/>
        <Route path='/new_review/:id' render={(routerProps) => <Review match={routerProps.match}/>}/>
        <Route path='/owned' component={Owned}/>

      </main>
      
    </div>
  );
}

export default App;
