import { Route } from 'react-router-dom';
import React, { useState } from 'react'
import Header from './Components/Header'
import AllSets from './Components/AllSets'
import './App.css';
import Wishlist from './Components/Wishlist';
import Review from './Components/Review';
import Owned from './Components/Owned';
import Search from './Components/Search'


function App() {
  const [legoId, setLegoId] = useState(null)

  return (
		<div className='App'>
			<Header />

			<main>
				<Route path='/' exact component={AllSets} />
				<Route path='/sets' render={() => <AllSets setLegoId={setLegoId} />} />
				<Route path='/wishlist' component={Wishlist} />
				<Route
					path='/new_review/:id'
					render={(routerProps) => <Review match={routerProps.match} />}
				/>
				<Route path='/owned' render={() => <Owned setLegoId={setLegoId} />} />
				<Route path='/search' component={Search} />
			</main>
		</div>
	);
}

export default App;
