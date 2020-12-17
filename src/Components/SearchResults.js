import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const SearchResults = ({ sets }) => {

    const handleClick = (index) => {
			let existingLegos = JSON.parse(localStorage.getItem('legos'));
			if (existingLegos == null) existingLegos = [];
			existingLegos.push(sets[index]);
			localStorage.setItem('legos', JSON.stringify(existingLegos));
        };
        
    const handleClick2 = (index) => {
			let existingOwnedLegos = JSON.parse(localStorage.getItem('ownedLegos'));
            if (existingOwnedLegos == null) existingOwnedLegos = [];
			existingOwnedLegos.push(sets[index]);
			localStorage.setItem('ownedLegos', JSON.stringify(existingOwnedLegos));
		};

	return (
		<div>
			<Grid container spacing={3} style={{ backgroundColor: 'black' }}>
				{sets.map((set, index) => (
					<Grid item xs={4}>
						<Card>
							<div key={index}>
								<h2>{set.name}</h2>
								<p>
									Set Number: {set.set_number} | Pieces: {set.piece_count} |
									Source: {set.source} | Release Year: {set.release_year} |
									Minifigures: {set.minifigures}
								</p>
								<CardMedia
									style={{ height: 0, paddingTop: '56%' }}
									image={set.image_url}
									title='legos'
								/>
								<button
									onClick={() => handleClick(index)}
									style={{ marginTop: '15px', marginBottom: '15px' }}>
									Add to Wishlist
								</button>
								<button onClick={() => handleClick2(index)}>
									Add to Owned
								</button>
							</div>
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default SearchResults;
