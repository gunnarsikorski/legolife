import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



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
							<Card style={{ margin: '10px', border: 'solid #ffe81f' }}>
								<div key={index}>
									<CardHeader title={lego.name} subheader={lego.set_number} />
									<CardContent>
										<Grid container style={{ marginTop: '-10px' }}>
											<Grid
												item
												xs={12}
												style={{
													padding: '10px',
													borderBottom: 'solid thin',
													borderTop: 'solid thin',
													marginBottom: '10px',
													marginTop: '-10px',
												}}>
												<Typography>Minifigures: {lego.minifigures}</Typography>
											</Grid>
											<Grid item xs={4}>
												<Typography>Pieces: {lego.piece_count}</Typography>
											</Grid>
											<Grid item xs={4}>
												<Typography>Source: {lego.source}</Typography>
											</Grid>
											<Grid item xs={4}>
												<Typography>
													Release Year: {lego.release_year}
												</Typography>
											</Grid>
										</Grid>
									</CardContent>
									<CardMedia
										style={{ height: 0, paddingTop: '56%' }}
										image={lego.image_url}
									/>
									<p>
										<Button
											variant='contained'
											color='secondary'
											startIcon={<DeleteIcon />}
											style={{ marginTop: '15px', marginBottom: '15px' }}
											onClick={() => handleClick(index)}>
											{' '}
											Remove
										</Button>
										<Accordion
											style={{ marginTop: '15px', marginBottom: '-15px' }}>
											<AccordionSummary expandIcon={<ExpandMoreIcon />}>
												Reviews
											</AccordionSummary>
											<AccordionDetails>
												{lego.reviews.map((review) => (
													<div>
														<p
															style={{
																margin: '5px',
																padding: '5px',
																border: 'solid thin',
															}}>
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

export default Wishlist;