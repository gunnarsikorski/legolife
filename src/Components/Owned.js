import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CardMedia, CircularProgress } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const Owned = ({ setLegoId }) => {
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
		return <CircularProgress />;
	}

	const handleClick = (index) => {
		let existingOwnedLegos = JSON.parse(localStorage.getItem('ownedLegos'));
		existingOwnedLegos.splice(index, 1);
		localStorage.setItem('ownedLegos', JSON.stringify(existingOwnedLegos));
		return legos[index].name;
	};

	return (
		<div>
			<h1>Owned</h1>
			<Grid container spacing={3} style={{ backgroundColor: 'black' }}>
				{JSON.parse(localStorage.getItem('ownedLegos')).map((lego, index) => (
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
									title='legos'
								/>
								<Link
									style={{ textDecoration: 'none' }}
									to={`/new_review/${lego.id}`}
									key={lego.id}>
									<Button
										onClick={(event) => setLegoId(lego.id)}
										variant='contained'
										color='primary'
										startIcon={<AddIcon />}>
										Review
									</Button>
								</Link>
								<Button
									style={{ marginTop: '15px', marginBottom: '15px', marginLeft: '10px' }}
									onClick={() => handleClick(index)}
                                    variant='contained'
                                    color='secondary'
                                    startIcon={<DeleteIcon />}>
									Remove
								</Button>
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
		</div>
	);
};

export default Owned;
