import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';


const Wishlist = () => {
     const [legos, setLegos] = useState('');

			useEffect(() => {
				const url = 'https://pure-sierra-61007.herokuapp.com/legos';
				fetch(url)
					.then((res) => res.json())
					.then((res) => {
						let legos = res;
						setLegos(legos);
					})
					.catch((error) => console.log(error));
			}, []);

			if (!legos) {
				return <CircularProgress/>;
			}

    const handleClick = (index) => {
			let existingLegos = JSON.parse(localStorage.getItem('legos'));
			existingLegos.splice(index, 1);
            localStorage.setItem('legos', JSON.stringify(existingLegos));
            return legos[index].name
        };
        
        
    return (
			<>
				<h1>Wishlist</h1>
				<Grid container spacing={3} style={{ backgroundColor: 'black' }}>
					{JSON.parse(localStorage.getItem('legos')).map((lego, index) => (
						<Grid item xs={4}>
							<Card>
								<div key={index}>
									<h2>{lego.name}</h2>
									<p>
										Set Number: {lego.set_number} | Pieces: {lego.piece_count} |
										Source: {lego.source} | Release Year: {lego.release_year} |
										Minifigures: {lego.minifigures}
									</p>
									<CardMedia
										style={{ height: 0, paddingTop: '56%' }}
										image={lego.image_url}
									/>
									<button
										style={{ marginTop: '15px', marginBottom: '15px' }}
										onClick={() => handleClick(index)}>
										Remove
									</button>
									<h4>Reviews:</h4>
									{lego.reviews.map((review) => (
										<div>
											<p style={{ paddingLeft: '10px', paddingRight: '10px' }}>
												{review.title} - {review.body}
											</p>
										</div>
									))}
								</div>
							</Card>
						</Grid>
					))}
				</Grid>
			</>
		);
};

export default Wishlist;