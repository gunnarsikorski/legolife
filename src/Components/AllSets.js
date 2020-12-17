import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
// import localStorage from 'local-storage';
// import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const AllSets = ({ setLegoId }) => {
	const [legos, setLegos] = useState('');
	const [reviews, setReviews] = useState('');

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

	const reviewUrl = 'https://pure-sierra-61007.herokuapp.com/reviews';
	fetch(reviewUrl)
		.then((res) => res.json())
		.then((res) => {
			let reviews = res;
			setReviews(reviews);
		})
		.catch((error) => console.log(error));

	if (!legos) {
		return <CircularProgress />;
	}

	const handleClick = (index) => {
		let existingLegos = JSON.parse(localStorage.getItem('legos'));
		if (existingLegos == null) existingLegos = [];
		existingLegos.push(legos[index]);
		localStorage.setItem('legos', JSON.stringify(existingLegos));
	};

	const handleClick2 = (index) => {
		let existingOwnedLegos = JSON.parse(localStorage.getItem('ownedLegos'));
		if (existingOwnedLegos == null) existingOwnedLegos = [];
		existingOwnedLegos.push(legos[index]);
		localStorage.setItem('ownedLegos', JSON.stringify(existingOwnedLegos));
	};

	return (
		<>
			<Grid container spacing={4} style={{ backgroundColor: 'black' }}>
				{legos.map((lego, index) => (
					<Grid item xs={4}>
						<Card style={{ margin: '10px', border: 'solid #ffe81f' }}>
							<div key={index}>
								<CardHeader
									title={lego.name}
									subheader={lego.set_number}
								/>
								<CardContent>
									<Grid container style={{ marginTop: '-10px' }}>
										<Grid
											item
											xs={12}
											style={{ padding: '10px', borderBottom: 'solid thin', borderTop:'solid thin', marginBottom:'10px', marginTop:'-10px' }}>
											<Typography>Minifigures: {lego.minifigures}</Typography>
										</Grid>
										<Grid item xs={4}>
											<Typography>Pieces: {lego.piece_count}</Typography>
										</Grid>
										<Grid item xs={4}>
											<Typography>Source: {lego.source}</Typography>
										</Grid>
										<Grid item xs={4}>
											<Typography>Release Year: {lego.release_year}</Typography>
										</Grid>
									</Grid>
								</CardContent>
								<CardMedia
									style={{ height: 0, paddingTop: '56%' }}
									image={lego.image_url}
									title='legos'
								/>

								<p>
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
										style={{ marginLeft: '10px', marginRight: '10px' }}
										onClick={() => handleClick(index)}
										variant='contained'
										color='primary'
										startIcon={<AddShoppingCartIcon />}>
										Wishlist
									</Button>
									<Button
										onClick={() => handleClick2(index)}
										variant='contained'
										color='primary'
										startIcon={<LoyaltyIcon />}>
										Owned
									</Button>
									<Accordion
										style={{ marginTop: '15px', marginBottom: '-15px' }}>
										<AccordionSummary expandIcon={<ExpandMoreIcon />}>
											Reviews
										</AccordionSummary>
										<AccordionDetails>
											{lego.reviews.map((review) => (
												<div>
													<p>
														{review.title} - {review.body}
													</p>
												</div>
											))}
										</AccordionDetails>
									</Accordion>
								</p>
							</div>
						</Card>
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default AllSets;
