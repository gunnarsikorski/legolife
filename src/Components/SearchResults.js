import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';


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
						<Card style={{ margin: '10px', border: 'solid #ffe81f' }}>
							<div key={index}>
								<CardHeader
									title={set.name}
									subheader={set.set_number}
								/>
								<CardContent>
									<Grid container style={{ marginTop: '-10px' }}>
										<Grid
											item
											xs={12}
											style={{ padding: '10px', borderBottom: 'solid thin', borderTop:'solid thin', marginBottom:'10px', marginTop:'-10px' }}>
											<Typography>Minifigures: {set.minifigures}</Typography>
										</Grid>
										<Grid item xs={4}>
											<Typography>Pieces: {set.piece_count}</Typography>
										</Grid>
										<Grid item xs={4}>
											<Typography>Source: {set.source}</Typography>
										</Grid>
										<Grid item xs={4}>
											<Typography>Release Year: {set.release_year}</Typography>
										</Grid>
									</Grid>
                                </CardContent>
								<CardMedia
									style={{ height: 0, paddingTop: '56%' }}
									image={set.image_url}
									title='legos'
								/>
								<Button
									onClick={() => handleClick(index)}
									style={{ margin: '10px' }}
									variant='contained'
									color='primary'
									startIcon={<AddShoppingCartIcon />}>
									{' '}
									Add to Wishlist
								</Button>
								<Button
									variant='contained'
									color='primary'
									startIcon={<LoyaltyIcon />}
									onClick={() => handleClick2(index)}>
									Add to Owned
								</Button>
							</div>
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default SearchResults;
