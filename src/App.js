import { Route } from 'react-router-dom';
import React from 'react'
import Header from './Components/Header'
import AllSets from './Components/AllSets'
import Home from './Components/Home'
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Route path='/' exact component={Home}/>
        <Route path='/sets' component={AllSets}/>

      </main>
      
    </div>
  );
}

export default App;
